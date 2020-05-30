// Costants

const DEGREES = (Math.PI / 180);
const RADIANS = (Math.PI / 180);
const PI = Math.PI;
const EULER = Math.E;
const TAU = PI * 2;
const PHI = (1 + sqrt(5)) / 2;

// Date

function hour() {
  return new Date().getHours();
}

function minute() {
  return new Date().getMinutes();
}

function second() {
  return new Date().getSeconds();
}


//Math
function pow(val, exp) {
  return Math.pow(val, exp);
}

function sqrt(val) {
  return Math.sqrt(val);
}

function root(val, root) {
  return pow(val, 1 / root);
}

function logof(val, base) {
  if (base == null) {
    base = 10;
  }
  return Math.log10(val) / Math.log10(base);
}

function random(valmin, valmax) {
  if (valmax != null) {
    return map(Math.random(), 0, 1, valmin, valmax);
  } else {
    return Math.random() * valmin;
  }
}

function map(value, valmin, valmax, mapmin, mapmax) {
  valmax = (valmax - valmin)
  mapmax = (mapmax - mapmin)
  return (value - valmin) * (mapmax / valmax) + mapmin;
}

function sin(val, mode) {
  if (mode == null) {
    mode = RADIANS;
  }
  if (mode == RADIANS) {
    return Math.sin(val);
  } else {
    return Math.sin(val * DEGREES);
  }
}

function cos(val, mode) {
  if (mode == null) {
    mode = RADIANS;
  }
  if (mode == RADIANS) {
    return Math.cos(val);
  } else {
    return Math.cos(val * DEGREES);
  }
}

function abs(val) {
  return Math.abs(val);
}

function round(val, mode) {
  if (mode == "ceil") {
    return Math.trunc(val) + 1;
  } else if (mode == "round" || mode == null) {
    return Math.round(val);
  } else if (mode == "floor") {
    return Math.trunc(val);
  } else {
    return undefined;
  }
}

// Draw

function dist(x1, y1, x2, y2) {
  return sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2));
}

function mediumPoint(x1, y1, x2, y2) {
  let dx = abs(x1) - abs(x2);
  let dy = abs(y1) - abs(y2);
  return (dx / 2) + (dy / 2);
}

function polToCartx(rad, theta, mode) {
  if (mode == null) {
    mode = RADIANS;
  }
  let x;
  if (mode == RADIANS) {
    x = rad * cos(val);
  } else if (mode == DEGREES) {
    x = rad * cos(val * DEGREES);
  }
  return x;
}

function polToCartY(rad, theta, mode) {
  if (mode == null) {
    mode = RADIANS;
  }
  let y;

  if (mode == RADIANS) {
    y = rad * sin(val);
  } else if (mode == DEGREES) {
    y = rad * sin(val * DEGREES);
  }
  return y;
}

//Document
function write(text) {
  return document.write(text);
}

function printCsle(text) {
  return console.log(text);
}

// function tableCsle(array) {
//   return console.table(array);
// }

function setElement(id, content) {
  let change = document.getElementById(id);
  change.innerHTML = content;
}
