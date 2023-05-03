// replace
console.log('Easy Frontend'.replace(' ', '-')); // Easy-Frontend
console.log('Easy Frontend'.replace(' ', '')); // EasyFrontend
console.log('Easy Frontend'.replace('Easy', 'Learn Easy')); // Learn Easy Frontend
console.log('Easy Frontend'.replace('Easy', '')); // ' Frontend'
// replace the first match only
console.log('easy easy frontend'.replace('easy', '')); // ' easy frontend'

// replaceAll
console.log('learn easy frontend'.replaceAll(' ', '')); // learneasyfrontend
console.log('learn easy frontend easy'.replaceAll('easy', '')); // 'learn  frontend '
