const product =[
    {id:1, name:'iPhone', color:'black', price:1200, brand:'apple'},
    {id:2, name:'xiaomi', color:'gold', price:100, brand:'xiaomi'},
    {id:3, name:'samsung', color:'gold', price:1300, brand:'sam'},
    {id:4, name:'iPhone', color:'gold', price:3200, brand:'apple'},
    {id:5, name:'xiaomi', color:'black', price:1000, brand:'xiaomi'},
  
];

// const newArray = product.filter(product=>{
//     if(product.price>1000){
//         console.log(product)
//     }
// })

const newArray = product.filter(product=>{
    if(product.id !==4){
        console.log(product)
    }
})