// String exercice
// Write a JavaScript function to parameterize a string
// Eg : parameterize('Code JS Is Fun') --> 'code-js-is-fun'

// Cách 1 : 
function parameterize1(str) {
  if (str === '') return '';

  const lowerText = str.toLowerCase();
  const newString = lowerText.replaceAll(' ', '-');

  return newString;
}

console.log(parameterize1('Code JS Is Fun'));


// Cách 2 : 
function parameterize2(str) {
  if (str === '') return '';

  const newString = str.toLowerCase().split(' ').join('-');

  return newString;
}

console.log(parameterize2('Code JS Is Fun'));
