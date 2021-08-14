const isString = require('lodash/isString');
const skillsData = require(`./data/skills.json`);

function skills(data) {
  const array = [];
  for (value of skillsData) {
    for (element of value.skills) {
      array.push(element);
    }
  }
  return `${data} var skills = ${JSON.stringify(array)};`;
}

function strToSkill(str) {
  for (section of skillsData) {
    for (skill of section.skills) {
      if (skill.label.toLowerCase() == str.toLowerCase()) {
        return skill;
      }
    }
  }
  return {label: str}
}

function experience(_) {
  const data = require(`./data/experience.json`).map((obj) => ({
    ...obj,
    tech:  obj.tech ? obj.tech.map((t) => isString(t) ? strToSkill(t): t): [],
  }));

  return `- var data = ${JSON.stringify(data)};`

}

module.exports = {skills, experience}
