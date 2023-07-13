import http.cookiejar
import urllib.request
import urllib.parse
import markdownify
import json
import os

lc_url = "https://leetcode.com"
ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36')"
f = open("./cookie")
ck = f.read()


cj = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
opener.addheaders = [
    ("Host", "leetcode.com"),
    ("User-Agent", ua),
    ("Cookie", ck),
]


def get_problem_list():
    with opener.open(lc_url + "/api/problems/algorithms/") as f:
        content = f.read().decode("utf-8")
    content = json.loads(content)
    return content["stat_status_pairs"]


def get_question_title(title_slug):
    QUERY = """ query questionTitle($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
         questionId,
         questionFrontendId,
         title,
         titleSlug,
         isPaidOnly,
         difficulty,
      }
    }
    """
    params = {
        "query": QUERY,
        "operationName": "questionTitle",
        "variables": json.dumps({"titleSlug": title_slug}),
    }
    url = (
        lc_url
        + "/graphql"
        + "?"
        + urllib.parse.urlencode(params, quote_via=urllib.parse.quote)
        .replace("%28", "(")
        .replace("%29", ")")
        .replace("%21", "!")
    )
    with opener.open(url) as f:
        content = f.read().decode("utf-8")
        content = json.loads(content)
        body = content["data"]["question"]
        return body


def get_question_detail(title_slug):
    QUERY = """ query questionContent($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        content,
        mysqlSchemas
      }
    }
    """
    params = {
        "query": QUERY,
        "operationName": "questionContent",
        "variables": json.dumps({"titleSlug": title_slug}),
    }
    url = (
        lc_url
        + "/graphql"
        + "?"
        + urllib.parse.urlencode(params, quote_via=urllib.parse.quote)
        .replace("%28", "(")
        .replace("%29", ")")
        .replace("%21", "!")
    )
    with opener.open(url) as f:
        content = f.read().decode("utf-8")
        content = json.loads(content)
        html = content["data"]["question"]["content"]
        html = html.strip("\n\r \xa0")
        return markdownify.markdownify(html)


def generate_doc(title_slug):
    question_info = get_question_title(title_slug)
    question_content = get_question_detail(title_slug)
    path = question_info["questionId"] + "." + question_info["titleSlug"]
    path = path.strip()
    path = path.rstrip()
    path = "./" + path
    isExist = os.path.exists(path)
    if not isExist:
        os.makedirs(path)
        file = open(path + "/README.md", "w")
        file.write(
            f"""{question_info["title"]}
---
### Problem
{question_content}
### Code
[✅ Javascript](./solution.js)
### Solution
题目含义：

解题思路：
- 

```javascript

```

[Back to list](../README.md)"""
        )
        file.close()
        file2 = open(path + "/solution.js", "w")
        file2.write(
            """const assert = require('node:assert/strict')

// write code here..

(function () {
    // test code here
    console.log('Accepted!')
})()
"""
        )
        file2.close()
        update_json(
            question_info["questionId"],
            question_info["titleSlug"],
            question_info["title"],
            question_info["difficulty"],
        )
    else:
        print("该题目已存在")


def update_json(id, slug, title, difficute):
    text = ""
    with open("./README.json", "r") as f:
        s = f.read()
        readme = json.loads(s)
        dics = readme["dir"]
        dics.append({"id": id, "slug": slug, "title": title, "difficute": difficute})
        sd = sorted(dics, key=lambda k: int(k["id"]))
        readme["dir"] = sd
        text = readme
    with open("README.json", "w") as r:
        json.dump(text, r)
        r.close()


def update_readme():
    text = ""
    rm = ""
    os.remove("./README.md")
    with open("./README.json", "r") as f:
        s = f.read()
        readme = json.loads(s)
        dics = readme["dir"]
        ds = f"| # | Title({len(dics)}) | Solution | Difficulty |\n|---| ----- | -------- | ---------- |\n"
        for dic in dics:
            ds += f"|{dic['id']}|[{dic['title']}](https://leetcode.com/problems/{dic['slug']}/)|[Solution](./{dic['id']}.{dic['slug']})|{dic['difficute']}| \n"
        text = ds
        rm = readme
    file = open("./README.md", "w")
    file.write(
        f"""
{rm["title"]}
---
{rm["desc"]}
\n{text} """
    )
    print("题目获取完毕，README.md已更新")
    file.close()


if __name__ == "__main__":
    slug = input("请输入题目slug: ")
    generate_doc(slug)
    update_readme()
