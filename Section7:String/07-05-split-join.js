// split
console.log('easy'.split()); // [ 'easy' ]
console.log('easy'.split('-')); //[ 'easy' ]
console.log('easy'.split(' ')); //[ 'easy' ]
console.log('easy'.split('as')); //[ 'e', 'y' ]
console.log('easy'.split('')); //[ 'e', 'a', 's', 'y' ]

// Đếm số words
const text = 'Easy Frontend';
const textArr = text.split(' ');
const words = textArr.length;
console.log(words);

// join
const newTextArr = ['easy', 'frontend']
console.log(newTextArr.join()) //easy,frontend
console.log(newTextArr.join('')) //easyfrontend
console.log(newTextArr.join(' ')) //easy frontend
console.log(newTextArr.join('-')) //easy-frontend



