const products =[
    {id:1, name:'iPhone', color:'black', price:1200, brand:'apple'},
    {id:2, name:'xiaomi', color:'gold', price:100, brand:'xiaomi'},
    {id:3, name:'samsung', color:'gold', price:1300, brand:'sam'},
    {id:4, name:'iPhone', color:'gold', price:3200, brand:'apple'},
    {id:5, name:'xiaomi', color:'black', price:1000, brand:'xiaomi'},
  
];

const newArray = products.map(product=>{
    if(product.brand==='apple'){
        product.price = product.price+100;
    }
    return product
})
console.log(newArray)