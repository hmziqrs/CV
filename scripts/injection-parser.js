

function skills(data) {
  const json = require(`./data/skills.json`);
  const array = [];
  for (value of json) {
    for (element of value.skills) {
      array.push(element);
    }
  }
  return `${data} var skills = ${JSON.stringify(array)};`;
}

module.exports = {skills}
