

function skills(data) {
  const json = require(`./data/skills.json`);
  const array = [];
  for (value of json) {
    for (element of value.skills) {
      if (array.length > 3) {
        break;
      }
      array.push(element);
    }
  }

  console.log(array);
  return `${data} var skills = ${JSON.stringify(array)};`;
}

module.exports = {skills}
