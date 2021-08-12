const ITEM_CLASS = "skill-anim-base";
const ACTIVE = "active";
const REMOVE = "remove";
let active = 0;
let timeout;

function init() {
  const elements = document.getElementsByClassName(ITEM_CLASS);
  elements[0].classList.add(ACTIVE);

  setInterval(() => {
    clearTimeout(timeout);
    elements[active].classList.remove(ACTIVE);
    elements[active].classList.add(REMOVE);
    timeout = setTimeout(() => {
      elements[active].classList.remove(REMOVE);
      clearTimeout(timeout);
    }, 2000);
    active++;
    if (active >= elements.length) {
      active = 0;
    }
    elements[active].classList.add(ACTIVE);
  }, 4000);
}


export default init;
