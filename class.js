class product{
    

    constructor(name, price, brand, malik){
        // console.log(name, price, brand)
        this.name = name;
        this.price = price;
        this.brandName = brand;
        this.malikName = malik;
    }

    details(){
        console.log(`ami ${this.name} product er details dekhte cay`)
    }
}

const iPhone = new product('iPhone', '1234', 'apple','jobs');
// console.log(iPhone)
iPhone.details()

const xiaomi = new product('xiaomi', 1000, 'xiaomi', 'jenson')
console.log(xiaomi)
xiaomi.details()