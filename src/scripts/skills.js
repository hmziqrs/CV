const ITEM_CLASS = "skill-anim-base";
const ACTIVE = "active";
let active = 0;


function init(params) {
  const elements = document.getElementsByClassName(ITEM_CLASS);
  elements[0].classList.add(ACTIVE);

  setInterval(() => {
    elements[active].classList.remove(ACTIVE);
    active++;
    elements[active].classList.add(ACTIVE);
  }, 4000);
}


export default init;
