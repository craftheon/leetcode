import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const base = path.dirname(fileURLToPath(import.meta.url))
const leg = fs.readFileSync(path.join(base, './leg.json')).toString()
const data = JSON.parse(leg)

for (let i = 0; i < data.length; i++) {
  execSync(`node ./bin/create.mjs ${data[i].slug}`, { stdio: 'inherit' })
}

