import * as engine from './particles';

const header = document.getElementById("header");



(function() {
  const c = engine.canvas()
  const ctx = canvas.getContext('2d');

  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
          c.width = window.innerWidth - getScrollbarWidth() -1;
          c.height = 450;
          drawStuff();
  }
  resizeCanvas();

  function drawStuff() {
      const {center} = engine.getDimensions();
      const grid = engine.grid3d();
      console.log(c.width);

      loop(grid, ctx, c, true);
  }
})();

function loop(grid, ctx, c, init = false) {
  ctx.clearRect(0, 0, c.width, c.height);
  grid.forEach((particle)  => {
    if (init) {
      particle.init();
    }
    particle.draw(ctx);
    particle.update(c);
  })
  requestAnimationFrame(() => loop(grid, ctx, c))
}

// window.addEventListener('scroll', () => {
//   console.log(canvas.clientWidth, canvas.clientHeight);
//   const offset = document.body.scrollTop || document.documentElement.scrollTop;


// });




function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}
