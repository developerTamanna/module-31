// const numbers =[1,2,3,4,5,6];
// const newArray =numbers.map(number=>number+1);
// console.log(newArray)


// next

// const numbers =[1,2,3,4,5,6];
// const newArray =numbers.map(number=>{
// return number+1;
// });
// console.log(newArray)


// next

const numbers =[1,2,3,4,5,6,];
const newArray =numbers.map(Number=>{
    return Number+1;
});

// console.log(newArray)

// next

let list = [5,2,3,4,56];
let add = list.map(value =>{
  return  value+1
});
// console.log(add)

// next

 const square = x => x * x;

//  console.log(square(5))

// next

function added(a, b){
    return a+b
}
// console.log(added(3,4));

const  added2 = (a,b)=>{
 return a+b
}

// console.log(added2(1, 4))

const roll = [2,4,5,6,7,24];
const squareArray = roll.map(element=>{
    return element*element
});
// console.log(squareArray)


const friends =['lima', 'mina', 'pina'];
const newFriends = friends.map((element, index)=>{
    console.log(index)
    console.log(element)
})