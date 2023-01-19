//Factory Function
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
  };
}

const myPizza = pizzaFactory("small");

//Javascript Classes

// class Pizza {
//   constructor(pizzaSize) {
//     this._size = pizzaSize;
//     this._crust = "original";
//   }

//   getCrust() {
//     return this._crust;
//   }
//   setCrust(pizzaCrust) {
//     this._crust = pizzaCrust;
//   }
// }

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
