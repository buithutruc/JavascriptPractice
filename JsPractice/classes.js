//Factory Function
// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

//Javascript Classes

class Pizza {
  crust = "original";
  #sauce = "traditional"; //private field
  #size;

  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} piza`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }

//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//   }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();
