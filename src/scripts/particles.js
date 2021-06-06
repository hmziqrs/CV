export function canvas() {
 return document.getElementById('canvas');
}

const MAX_Z = () => canvas().width* 0.38;
const MIN_Z = 1;

var velocity = 0.25;

export function setVelocity(raw) {
  velocity = raw ?? 0.25;
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


export function grid3d(c) {
  var c = canvas();
  // const amount = 1;
  const amount = Math.floor((c.width / c.height) * 250);

  return Array(amount).fill(0).map(() => particleObject(c));
}


function particleObject(c) {
  const particle = {
    init: false,
    x: 0,
    y: 0,
    size: 0,
    z: 0,
    update: function update(c, ctx, d) {

      particle.z -= velocity;
      if (particle.z < MIN_Z) {
        particle.init(true);
      } else if (particle.z > MAX_Z()) {
        particle.z = MIN_Z;
      }

      var scale = .1 + map(particle.z, 0, c.width, particle.size, 0);
      var sx = map(particle.x / particle.z, 0, 1, 0, c.width);
      var sy = map(particle.y / particle.z, 0, 1, 0, c.height);
      ctx.beginPath()
      ctx.arc(sx, sy, Math.abs(scale), 0, 2 * Math.PI, false);
      ctx.fillStyle = 'white';
      ctx.fill();

    },
    init: function init(randomZ = false) {
      particle.x = (-1 + Math.random() * 2) * c.height * 0.10;
      particle.y = (-1 + Math.random() * 2) * c.width * 0.05;
      particle.size =  0.7 + Math.random();
      particle.z = randomZ ? Math.random() * MAX_Z() : MAX_Z();
    }
  };
  if (!particle.init) {
    particle.init(false);
  }
  return particle;
}

function map(value, from1, to1, from2, to2) {
    return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
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
