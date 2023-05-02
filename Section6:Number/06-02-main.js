// Number
// Number.parseInt()
// Number.parseFloat

const a = Number("123");
console.log(a); // 123
console.log(typeof a);

const b = Number.parseInt("19a.5");
console.log(b); // 1
console.log(typeof b);

const c = Number.parseFloat("1.5");
console.log(c); // 1.5
console.log(typeof c);

const d = Number("123.5a");
console.log(d); // NaN
console.log(typeof d);

const e = Number.parseFloat("123.5a");
console.log(e); // 123.5
console.log(typeof e); // number

const f = Number.parseInt("123.5a");
console.log(f); // 123
console.log(typeof f); // number

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(Number(true)); // 1
console.log(Number(false)); // 0

// toFixed()
const n = 123.525;
console.log(n.toFixed()); //124
console.log(n.toFixed(0)); //124
console.log(typeof n.toFixed(0)); // string

console.log(n.toFixed(1)); // 123.5
console.log(n.toFixed(2)); // 123.53
console.log(n.toFixed(3)); // 123.525
console.log(n.toFixed(4)); // 123.5250
console.log(n.toFixed(5)); // 123.52500

// toPrecision()
const m = 123.525;
console.log(m.toPrecision()); // 123.525
console.log(typeof m.toPrecision()); // string
console.log(typeof m.toString()); // string

// console.log(m.toPrecision(0)); // toPrecision() argument must be between 1 and 100
console.log(m.toPrecision(1)); //100 or 1e+2
console.log(m.toPrecision(2)); // 1.2e+2 or 120
console.log(m.toPrecision(3)); // 124
console.log(m.toPrecision(4)); // 123.5
console.log(m.toPrecision(5)); // 123.53
