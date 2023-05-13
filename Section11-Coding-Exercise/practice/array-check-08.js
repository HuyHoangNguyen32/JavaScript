// for...i
// export function hasFreeShip(productList, price) {
//   if (!Array.isArray(productList) || productList.length === 0) return false;
//   if (typeof price !== 'number') return false;

//   for (let i = 0; i < productList.length; i++) {
//     if (productList[i].isFreeShip === true && productList[i].price < price) return true;
//   }

//   return false;
// }

// const productList = [
//   {
//     id: 1,
//     name: 'iPhone',
//     isFreeShip : true,
//     price: 70
//   },
//   {
//     id: 2,
//     name: 'Samsung',
//     isFreeShip : false,
//     price: 100
//   },
// ];

// console.log(hasFreeShip(productList, 80))


/* #################################### */
// forEach
// function isProduct(product, price) {
//   return product.isFreeShip === true && product.price < price;
// }

// export function hasFreeShip(productList, price) {
//   if (!Array.isArray(productList) || productList.length === 0) return false;
//   if (typeof price !== 'number') return false;

//   let hasProduct = false;

//   productList.forEach((product) => {
//     if (isProduct(product, price)) hasProduct = true;
//   });

//   return hasProduct;
// }

// const productList = [
//   {
//     id: 1,
//     name: 'iPhone',
//     isFreeShip: false,
//     price: 90,
//   },
//   {
//     id: 2,
//     name: 'Samsung',
//     isFreeShip: true,
//     price: 70,
//   },
// ];

// console.log(hasFreeShip(productList, 80));


/* #################################### */
// find
// function isProduct(product, price) {
//   return product.isFreeShip === true && product.price < price;
// }

// export function hasFreeShip(productList, price) {
//   if (!Array.isArray(productList) || productList.length === 0) return false;
//   if (typeof price !== 'number') return false;

//   const result = Boolean(productList.find((product) => isProduct(product, price)));

//   return result;
// }

// const productList = [
//   {
//     id: 1,
//     name: 'iPhone',
//     isFreeShip: false,
//     price: 90,
//   },
//   {
//     id: 2,
//     name: 'Samsung',
//     isFreeShip: true,
//     price: 70,
//   },
// ];

// console.log(hasFreeShip(productList, 70));

/* #################################### */
// findIndex
function isProduct(product, price) {
  return product.isFreeShip === true && product.price < price;
}

export function hasFreeShip(productList, price) {
  if (!Array.isArray(productList) || productList.length === 0) return false;
  if (typeof price !== 'number') return false;

  const result = productList.findIndex((product) => isProduct(product, price)) > 0;

  return result;
}

const productList = [
  {
    id: 1,
    name: 'iPhone',
    isFreeShip: false,
    price: 90,
  },
  {
    id: 2,
    name: 'Samsung',
    isFreeShip: true,
    price: 70,
  },
];

console.log(hasFreeShip(productList, 70));
