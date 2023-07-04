import http.cookiejar
import urllib.request
import urllib.parse
import markdownify
import json
import os

lc_url = "https://leetcode.com"
ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36')"
ck = "gr_user_id=46571f9a-e4bc-49c6-aaa2-1c750df62884; 87b5a3c3f1a55520_gr_last_sent_cs1=weiyuang; csrftoken=mJuRYEtoIperW8PFXvVhFdpi9K8hMmlrZi3YA4ooVCGlNFIuzOn4jmih4Z9hO5A2; _gid=GA1.2.2050087353.1688349607; NEW_PROBLEMLIST_PAGE=1; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMjc1NjQwMiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6ImMxNzg3OGU3YTBkNGY4NWU0NjNkMTM5NzdkODQ2MDdlOWMyODY2NDIiLCJpZCI6Mjc1NjQwMiwiZW1haWwiOiJ5dWFuZy53eWFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ3ZWl5dWFuZyIsInVzZXJfc2x1ZyI6IndlaXl1YW5nIiwiYXZhdGFyIjoiaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zMy1sYy11cGxvYWQvYXNzZXRzL2RlZmF1bHRfYXZhdGFyLmpwZyIsInJlZnJlc2hlZF9hdCI6MTY4ODM1NDM4NSwiaXAiOiIxMDkuMTIzLjIyOS4xNTAiLCJpZGVudGl0eSI6IjVmMGZmNWQ4Nzk5ZWQ0YzBlZDM1NWZhNDc0YTdiYmMyIiwic2Vzc2lvbl9pZCI6NDEwMzMzNTIsIl9zZXNzaW9uX2V4cGlyeSI6MTIwOTYwMH0.SvUkQjFWJG9HtU28UJq3YU_qf9RMXQpQ2EGBIJoFdt4; _ga_CDRWKZTDEX=deleted; 87b5a3c3f1a55520_gr_session_id=f6853902-d4fb-4f1d-aa72-873b02821aac; 87b5a3c3f1a55520_gr_last_sent_sid_with_cs1=f6853902-d4fb-4f1d-aa72-873b02821aac; 87b5a3c3f1a55520_gr_session_id_sent_vst=f6853902-d4fb-4f1d-aa72-873b02821aac; _gat=1; 87b5a3c3f1a55520_gr_cs1=weiyuang; _ga=GA1.1.1373791756.1681987922; _ga_CDRWKZTDEX=GS1.1.1688436979.39.1.1688438586.56.0.0; _dd_s=rum=0&expire=1688439490993; _ga_RN3J7V8VS5=GS1.1.1688436983.2.1.1688438596.0"


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
write solution here..

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
        readme["dir"] = dics
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
        ds = "| # | Title | Solution | Difficulty |\n|---| ----- | -------- | ---------- |\n"
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
