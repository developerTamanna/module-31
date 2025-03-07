class product{
    constructor(name, price, brand, malik){
        this.name = name;
        this.price = price;
        this.brandName = brand;
        this.malik = malik
    }
    details(){
        console.log(`call the details method for ${this.name}`)
    }
}

const iPhone = new product('iPhone', 10000, 'apple', 'jobs')
iPhone.details();
console.log(iPhone)

