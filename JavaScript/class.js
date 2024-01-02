class Person{
    constructor(name){
        this.name = name;

    }

    name() {
        console.log("The name is " + this.name + ".");

    }
}
const altair = new Person("Altair");
altair.name();


class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    console.log("I have a " + this.brand);
    
  }
}

const mycar = new Car("Ford");
mycar.present();
