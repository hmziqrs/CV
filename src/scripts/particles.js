export function canvas() {
 return  document.getElementById('canvas');

}

export function getDimensions(params) {
  var c = canvas();
      const center = {x: c.width/2, y: c.height/2};
      const initial = {
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
      };
      return { initial, center };
}


export function grid3d() {
  var c = canvas();
  const amount = Math.floor((c.width / c.height) * 140);

  return Array(amount).fill(0).map(() => particleObject(c));
}


function particleObject() {
  const particle = {
    init: false,
    x: 0,
    y: 0,
    size: 0,
    update: function update(canvas) {
      particle.x++;
      particle.y++;
      particle.size *= 1.001;

      if (particle.x > canvas.width || particle.y > canvas.height) {
        particle.init();
      }

      return particle;
    },
    draw: function draw(ctx) {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'white';
      ctx.fill();
    },
    init: function init() {
      particle.x =  rand(0, canvas().width);
      particle.y =  rand(0, canvas().height);
      particle.size =  rand(0, 1.5, false);
    }
  };
  if (!particle.init) {
    particle.init();
  }
  return particle;
}



function rand(min, max, floor = true) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const val = Math.random() * (max - min + 1);

    if (!floor) {
            return val + min;
    }

    return Math.floor(val) + min;
}
