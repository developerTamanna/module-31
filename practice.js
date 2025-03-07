// map()

const price =[100, 200, 300];
const doublePrice =price.map(price=>price*2);
// console.log(doublePrice)


//next forEach
const names =['lima', 'ruba', 'sathi'];
names.forEach(name => {
    // console.log(name)
});

// next:filter

// const products = [{id:1}, {id:2}];
// const result = products.filter(product=>product.id>1);
// console.log(result)


// next find
const products = [{id:1}, {id:2}];
const result = products.find(product=>product.id===2);
console.log(result)