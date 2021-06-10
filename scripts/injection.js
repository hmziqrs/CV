const fs = require('fs');

const BASE = "./src/components/";
const components = ['contact', 'experience', 'skills', 'summary'];

async function run() {
  try {
    const pugs = {};
    for (const component of components) {
      pugs[component] = fs.readFileSync(`${BASE}${component}/${component}.pug`, 'utf8').split('\n');
    }

    process.exit();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
