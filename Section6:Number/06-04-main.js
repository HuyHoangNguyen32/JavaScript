console.log((0.1).toFixed(20)); // 0.10000000000000000555
console.log((0.2).toFixed(20)); // 0.20000000000000001110
console.log((0.1 + 0.2).toFixed(20)); // 0.30000000000000004441
console.log((0.3).toFixed(20)); // 0.29999999999999998890

console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2 === 0.3); // false

console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
console.log((0.1 + 0.2).toFixed(1) === (0.3).toFixed(1)); // true
