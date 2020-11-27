window.isToggled = false;

window.toggle = function() {
  const download = document.getElementById("download-card");
  const footer = document.getElementById("footer");
  const header = document.getElementById("header");
  const contact = document.getElementById("contact");
  const skills = document.getElementById("skills");

  const elementsToHide = [download, footer, header];
  const elementsClass = [contact, skills];

  if (!window.isToggled) {
    window.isToggled = true;
    elementsToHide.forEach((element) => {
      element.style.display = "none";
    });
    elementsClass.forEach((element) => {
      element.classList.add('toggled');
    })
  } else {
    window.isToggled = false;
    elementsToHide.forEach((element) => {
      element.style.display = "block";
    });
    elementsClass.forEach((element) => {
      element.classList.remove('toggled');
    })
  }
}
