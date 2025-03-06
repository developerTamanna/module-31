const person ={
    name:'Anonto',
    age: 25,
    favoritFood: 'Rich'
};
const {name, ...rest} = person;
// console.log(name);
console.log(rest)