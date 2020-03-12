const header = document.getElementById("header");

window.addEventListener('scroll', () => {
  const offset = document.body.scrollTop || document.documentElement.scrollTop;

  header.style.backgroundPositionY = `${offset * -0.9}px`;

});
