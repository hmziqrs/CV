import * as engine from "./particles";
function loop(e, t, n, i, o = !1) {
  console.log("loop"),
    t.clearRect(-n.width / 2, -n.height / 2, n.width, n.height),
    e.forEach((e) => {
      o && e.init(), e.update(n, t, i);
    }),
    requestAnimationFrame(() => loop(e, t, n, i));
}
function getScrollbarWidth() {
  const e = document.createElement("div");
  (e.style.visibility = "hidden"),
    (e.style.overflow = "scroll"),
    (e.style.msOverflowStyle = "scrollbar"),
    document.body.appendChild(e);
  const t = document.createElement("div");
  e.appendChild(t);
  const n = e.offsetWidth - t.offsetWidth;
  return e.parentNode.removeChild(e), n;
}
!(function () {
  const e = engine.canvas(),
    t = canvas.getContext("2d");
  function n() {
    (e.width = window.innerWidth - getScrollbarWidth() - 1),
      (e.height = 450),
      (function () {
        t.translate(e.width / 2, e.height / 2);
        const n = engine.getDimensions(),
          i = engine.grid3d(e);
        console.log(e.width), loop(i, t, e, n, !0);
      })();
  }
  window.addEventListener("resize", n, !1), n();
})();
