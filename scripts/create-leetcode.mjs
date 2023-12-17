import { GraphQLClient, gql } from 'graphql-request'
import fs from 'node:fs'
import path from "node:path"
import { fileURLToPath } from 'url'
import TurndownService from 'turndown'
import turndownPluginGfm from 'turndown-plugin-gfm'

const slug = process.argv[2]
const lcUrl = "https://leetcode.com/graphql"
const ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36')"
const base = path.dirname(fileURLToPath(import.meta.url))
const cookie = fs.readFileSync(path.join(base, '../cookie')).toString()
const problems = fs.readFileSync(path.join(base, './problems.json')).toString()
const metaData = fs.readFileSync(path.join(base, '../pages/solutions/_meta.json')).toString()
const turndown = new TurndownService()
const data = JSON.parse(problems)
const mtdata = JSON.parse(metaData)
const gfm = turndownPluginGfm.gfm

turndown.use(gfm)

turndown.addRule('code', {
  filter: ['pre'],
  replacement: function (content) {
    const c = content.replace(/[\\*]/g, '')
    return '```javascript \n' + c + '```'
  }
})



if (!slug) {
  console.error('Slug is required!')
  process.exit(1)
}

if (!cookie) {
  console.error('Cookie is Required!')
  process.exit(1)
}


const client = new GraphQLClient(lcUrl, {
  headers: {
    'User-Agent': ua,
    'Cookies': cookie,
  },
})

const getQqlData = async function (data) {
  const res = await client.request(data, {
    titleSlug: slug
  })
  return res.question
}

const getQuestionInfo = async function () {
  const data = await getQqlData(gql`
  query questionTitle($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionId,
          title,
          titleSlug,
          difficulty,
    }
    }`)
  return {
    id: data.questionId,
    slug: data.titleSlug,
    title: data.title,
    difficulty: data.difficulty
  }
}

const getDetail = async function () {
  const data = await getQqlData(gql`
    query questionContent($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        content,
      }
    }
      `)
  if (!data.content) throw new Error()
  const markdown = turndown.turndown(data.content)
  return {
    content: markdown
  }
}


const getSimilar = async function () {
  const data = await getQqlData(gql`
    query SimilarQuestions($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        similarQuestionList {
          difficulty
          titleSlug
          title
        }
      }
    }
      `)
  return data.similarQuestionList.slice(0, 4).map(e => {
    return {
      title: e.title,
      slug: e.titleSlug,
      difficulty: e.difficulty,
    }
  })
}

const getHints = async function () {
  const data = await getQqlData(gql`
    query questionHints($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        hints,
      }
    }
      `)
  if (!data.hints) throw new Error()
  const hints = data.hints.map(e => turndown.turndown(e))
  return {
    hints
  }
}

const getTags = async function () {
  const data = await getQqlData(gql`
    query singleQuestionTopicTags($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        topicTags {
          name
          slug
        }
      }
    }
      `)
  return data.topicTags
}

const [info, detail, hints, tags, similars] = await Promise.all([
  getQuestionInfo(),
  getDetail(),
  getHints(),
  getTags(),
  getSimilar()
])

const question = {
  ...info,
  ...detail,
  ...hints,
  similars,
  tags

}

const isExist = data.filter(e => e.slug === question.slug)[0]

if (!isExist) {
  data.push(question)
}


mtdata[question.slug] = question.title
fs.writeFileSync(path.join(base, './problems.json'), JSON.stringify(data))
fs.writeFileSync(path.join(base, '../pages/solutions/_meta.json'), JSON.stringify(mtdata))


const questionFile = `import { Problem, Code, Solution, Similar } from '@/components'

<Problem slug="${question.slug}" id="${question.id}" title="${question.title}" difficulty="${question.difficulty}" tags={${JSON.stringify(question.tags)}} >
    ${question.content}
</Problem >

<Solution>
write solution in here
</Solution>

<Code>
\`\`\`javascript
// write code in here
\`\`\`
</Code>

<Similar data={${JSON.stringify(question.similars)}} />
`

fs.writeFileSync(path.join(base, `../pages/solutions/${question.slug}.mdx`), questionFile)


const readmeHead = `| #(${data.length}) | Title | Solution | Difficulty  |\n| ---| ----- | -------- | ---------- | `

const readmeBody = data.map(e => `| ${e.id} | [${e.title}](https://leetcode.com/problems/${e.slug}) | [Solution](/pages/solutions/${e.slug}.mdx) | ${e.difficulty} |`)

const readme = `javascript-leetcode
---
Leetcode solutions with javascript
${readmeHead}
${readmeBody.join('\n')}
`

fs.writeFileSync(path.join(base, '../README.md'), readme)

console.log('Question Updated!')