import * as engine from "./particles";

let animationNo = undefined;
const header = document.getElementById("header");

(function () {
  const c = engine.canvas();
  const ctx = canvas.getContext("2d");
  // resize the canvas to fill browser window dynamically
  window.addEventListener("resize", resizeCanvas, false);
  function resizeCanvas() {
    c.width = window.outerWidth - getScrollbarWidth() - 1;
    c.height = document.getElementById("header").offsetHeight;
    drawStuff();
  }
  resizeCanvas();

  function drawStuff() {
    console.log(animationNo);
    if (animationNo != null) {
      engine.setVelocity(0.12);
      cancelAnimationFrame(animationNo);
    }
    const c = engine.canvas();
    const ctx = canvas.getContext("2d");
    ctx.translate(c.width / 2, c.height / 2);
    const dimensions = engine.getDimensions();
    const grid = engine.grid3d(c);
    loop(grid, ctx, c, dimensions);

    window.addEventListener("mousemove", function mouseMove(e) {
      const c = engine.canvas();
      const ctx = canvas.getContext("2d");
      const x = c.width / 2 - e.clientX * 0.045;
      const y = c.height / 2 - e.clientY * 0.045;
      ctx.setTransform(1, 0, 0, 1, x, y);
    });
  }
})();

function loop(grid, ctx, c, d) {
  ctx.clearRect(-c.width * 0.5, -c.height * 0.5, c.width * 2, c.height * 2);
  grid.forEach((particle) => {
    particle.update(c, ctx, d);
  });

  animationNo = requestAnimationFrame(() => loop(grid, ctx, c, d));
}

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

// source = https://stackoverflow.com/questions/22593286/detect-measure-scroll-speed
var checkScrollSpeed = (function (settings) {
  settings = settings || {};

  var lastPos,
    newPos,
    timer,
    delta,
    delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();

  return function () {
    newPos = window.scrollY;
    if (lastPos != null) {
      // && newPos < maxScroll
      delta = newPos - lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
  };
})();


// listen to "scroll" event
const MAX_SPEED = 0.66;
window.onscroll = function () {
  const parallax = window.scrollY * 0.22;
  header.style.transform = `translateY(${parallax}px)`;
  var speed = checkScrollSpeed() * 0.15;
  if (speed < -MAX_SPEED) {
    speed = -MAX_SPEED;
  }
  if (speed > MAX_SPEED) {
    speed = MAX_SPEED;
  }
  if (speed == 0) {
    speed = MAX_SPEED * 0.33;
  }

  engine.setVelocity(speed);
};
