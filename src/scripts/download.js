window.isToggled = false;

window.toggle = function() {
  const download = document.getElementById("download-card");
  const footer = document.getElementById("footer");
  if (!window.isToggled) {
    window.isToggled = true;
    download.style.display = "none";
    footer.style.display = "none";
  } else {
    window.isToggled = false;
    download.style.display = "block";
    footer.style.display = "block";
  }
}
