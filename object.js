const person ={
    name :'tamu',
    age :30,
    friends :['lima', 'ruba'],
    details:{
        job:'yeas',
        isMarrid:true,
        status:'not found',
        father:{
            name: 'sultan',

        }
    }
    
}

// console.log(person.details.mother?.name)


// next

let user ={
    name:'joe'
}
//does not throw error
// let zip = user?.address?.zip
// console.log(zip)
console.log(user?.address?.zip)



// next

let users= {
  name:'moina',
  address:{
    zip:1309
  }
}
console.log(users.address.zip)



// next

const persons ={
    name:'jiniya',
    age:25,
    country:'BD',
    details:{
        job:true,
        salery:5000,
        isMarrid: 'hea'
    }
}

// console.log(persons.description?.isEating)



// next function check

const obj={
    greet:()=>console.log('hello')
}
obj.greet?.()
obj.sayGoodbye?.()