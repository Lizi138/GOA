// 1
class car{
    constructor(brand, model) {
        this.brand = brand;
        this.model = model:
    }

    drive() {
        console.log(`The ${this.brand} ${this.model} id driving`)
    }
}

const carBrand = new car("Mercedes", "C class");
carBrand.drive()