// const person ={
//     name:'gias',
//     action: function(){
//         console.log(this.name);
//     }
// }
// person.action();

// const person ={
//     name: 'tamanna',
//     action(){
//         console.log(this.name)
//     }
// }
// person.action()

// next:

// class person{
//     #status;
//     constructor(name, age,status){
//         this.name=name;
//         this.age=age;
//         this.#status=status;
//     }
// }

// const details = new person('tamanna', 34, 'single')
// console.log(details )





class person{
    #accountNumber
    constructor(name, age, accountNumber){
        this.name = name;
        this.age = age;
        this.#accountNumber=accountNumber;
    }
    move(){
        console.log(this.#accountNumber)
    }
}

const details =new person('tamanna', 20, 2345013)
details.move()