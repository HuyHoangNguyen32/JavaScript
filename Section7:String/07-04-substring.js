// slice
console.log('Easy Frontend'.slice(0, 4)); // Easy
console.log('Easy Frontend'.slice(2)); // sy Frontend
console.log('Easy Frontend'.slice(-3)); // end
console.log('Easy Frontend'.slice(-3, -1)); // en

// substring
console.log('Easy Frontend'.substring(0, 4)); // Easy
console.log('Easy Frontend'.substring(2)); // sy Frontend

console.log('Easy Frontend'.substring(-3)); // Easy Frontend
// Tương đương với : console.log('Easy Frontend'.substring(-3));

console.log('Easy Frontend'.substring(-3, -1)); // ''
// Tương đương với : console.log('Easy Frontend'.substring(0, 0));

// slice vs substring
console.log('Easy Frontend'.slice(4, 0)); // ''
console.log('Easy Frontend'.substring(4, 0)); // Easy
// Tương đương với : console.log('Easy Frontend'.substring(0, 4));
