const ITEM_CLASS = "skill-anim-base";
const ACTIVE = "active";
const REMOVE = "remove";
let active = 0;
let length = 0;

function init() {
  const elements = document.getElementsByClassName(ITEM_CLASS);
  length = elements.length;
  elements[0].classList.add(ACTIVE);

  setInterval(() => {
    elements[active].classList.remove(ACTIVE);
    elements[active].classList.add(REMOVE);
    setTimeout(() => {
      elements[prev()].classList.remove(REMOVE);
    }, 1200);
      active = next();
    elements[active].classList.add(ACTIVE);
  }, 4000);
}

function prev() {
  const no = active-1;
  if (active <= 0) {
    return length -1;
  }
  return no;
}

function next() {
  const no = active +1;
  if (no >= length) {
    return 0;
  }
  return no;
}


export default init;
