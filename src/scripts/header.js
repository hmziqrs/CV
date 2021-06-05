const header = document.getElementById("header");



(function() {
    var c = document.getElementById('canvas'),
            ctx = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            c.width = window.innerWidth - getScrollbarWidth();
            c.height = 450;
            drawStuff();
    }
    resizeCanvas();

    function drawStuff() {
      const center = {x: c.width/2, y: c.height/2};
      const initialFrame = {
        start: {
          xs: center.x - (c.width * 0.14),
          ys: center.y - (c.height * 0.14),
          xe: center.x + (c.width * 0.14),
          ye: center.y + (c.height * 0.14),
        },
        end: {
          xs: center.x - (c.width * 0.05),
          ys: center.y - (c.height * 0.05),
          xe: center.x + (c.width * 0.05),
          ye: center.y + (c.height * 0.05),
        },
      }
      console.log(initialFrame);

    }
})();

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
