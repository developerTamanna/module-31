class vehical{
    constructor(name, price,){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('ami cholachol korte pare');
    }
}

class bus extends vehical{
    constructor(name, price, seat){
        super(name, price);
        this.seat = seat;
    }
    rout(){
        console.log('Dhaka To Cox')
    }
}
class truck extends vehical{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    carryLoad(){
        console.log('50 kilo up did not sopurt')
    }
}

const myBus = new bus('bus', 123445, 50);
myBus.rout();
console.log(myBus)