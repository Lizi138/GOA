// 1
class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }

    introduce(){
        console.log(`Hello, I am ${this.name} and I teach ${this.subject}`)
    }
}

const t1 = new Teacher("Maia", "Maths");
console.log(t1)


// 2
class Phone{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    ring(){
        console.log(`The ${this.brand} ${this.model} is ringing!`);
    }
}

const p1 = new Phone("Iphone", "17 pro max");
console.log(p1);


// 3
class Movie{
    constructor(title, year){
        this.title = title;
        this.year = year;
    }

    play(){
        console.log(`Now playing: ${this.title} (${this.year})`);
    }
}

const m1 = new Movie("Encanto", "2020");
console.log(m1)


// 4
class Cat{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    meow(){
        console.log(`${this.name} the ${this.color} cat says Meow!`);
    }
}

const c1 = new Cat("Jeka", "Black");
console.log(c1)

// 5
class BankCard{
    constructor(cardNumber, balance){
        this.cardNumber = cardNumber;
        this.balance = balance;
    }

    withdraw(amount){
        console.log()
    }
}