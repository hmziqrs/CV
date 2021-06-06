export function canvas() {
 return  document.getElementById('canvas');
}

const SCALE_FACTOR = 1.00015;
const MAX_Z = 400;
const MIN_Z = 1;

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
  const amount = Math.floor((c.width / c.height) * 140);

  return Array(amount).fill(0).map(() => particleObject(c));
}


function particleObject(c) {
  const particle = {
    init: false,
    x: 0,
    y: 0,
    size: 0,
    z: 0,
    r: 0,
    update: function update(c, ctx, d) {


      // particle.size *= SCALE_FACTOR;
      // if (particle.size < 0.75) {
      //   particle.size *= 1.009;
      // }

      // const ratio = particle.size * 0.15;
      // if (particle.x < d.center.x && particle.y < d.center.y) {
      //   // console.log(d.center);
      //   // particle.x = (particle.x*TRAVEL_FACTOR) - particle.x;
      //   // particle.y = (particle.y*TRAVEL_FACTOR) - particle.y;
      // } else {
      // }
      // particle.x += ratio;
      // particle.y += ratio;

      // if (particle.x > c.width || particle.y > c.height || particle.x <0 || particle.y < 0) {
      //   particle.init();
      // }
      // ctx.beginPath()
      // ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI, false);
      // ctx.fillStyle = 'white';
      // ctx.fill();
      particle.z -= 1.9;
      if (particle.z < MIN_Z) {
        particle.init(true);
      } else if (particle.z > MAX_Z) {
        particle.z = MIN_Z;
      }

      var scale = .1 + map(particle.z, 0, c.width, particle.size, 0);
      var sx = map(particle.x / particle.z, 0, 1, 0, c.width);
      var sy = map(particle.y / particle.z, 0, 1, 0, c.height);
      const xx = 0.1;
      // const yy = 0.1;
      // var sx = map(xx, 0, 1, 0, c.width);
      // var sy = map(yy, 0, 1, 0, c.height);
      // var time = DateTime.now().millisecondsSinceEpoch/200;
      // paint.color = particle.color;
      // var pos = Offset(sx,sy);
      // canvas.drawCircle( pos, scale, paint,);

      ctx.beginPath()
      ctx.arc(sx, sy, scale, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'white';
      ctx.fill();

    },
    init: function init(randomZ = false) {
      // particle.x =  rand(0, c.width * 0.14);
      // particle.y =  rand(0, c.height * 0.14);
      // particle.size =  rand(0, 1.5, false);

      particle.x = -2;
      particle.y = 2;
      particle.x = (-1 + Math.random() * 2) * c.height * 0.10;
      particle.y = (-1 + Math.random() * 2) * c.width * 0.10;
      particle.size =  1;
      particle.z = randomZ ? Math.random() * MAX_Z : MAX_Z;
      particle.r = 0;
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
