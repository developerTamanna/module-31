class vehical{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('ami cholachol korte pari')
    }
  
}
class bus extends vehical {
    constructor(name, price, seat) {
        super(name, price);
        this.seat = seat
    }
    route(){
        console.log('dhaka to cox')
    }
}
class truck extends vehical{
    constructor(name, price, load){
        super(name, price);
        this.load = load
    }
    carryLoad(){
        console.log('50 mon er bese newa jabena')
    }
}

// const myBus = new bus('bus', 20000000, 50)
// myBus.move();
// myBus.route();
// // console.log(myBus)
// console.log(myBus.seat)
const myTruck = new truck('truck',50000, '50kilo')
console.log(myTruck)
myTruck.carryLoad()