const fs = require("fs");

const BASE = "./src/components/";

function getFilePath(component) {
  return `${BASE}${component}/${component}.pug`;
}

async function run() {
  try {
    const components = fs.readdirSync('scripts/data/', 'utf8').filter((file) => file.includes('.json')).map((file) => file.split('.')[0])


    for (const component of components) {
      const json = require(`./data/${component}.json`);
      const newFile = fs
        .readFileSync(getFilePath(component), "utf8")
        .split("\n")
        .map((v, i) => {
          if (i === 0) {
            return `- var data = ${JSON.stringify(json)};`;
          }
          return v;
        })
        .join("\n");
      fs.writeFileSync(getFilePath(component), newFile, "utf8");
    }

    process.exit();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
