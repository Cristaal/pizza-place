var PizzaPlace = {
  pizzaSizes: [12, 16, 20],
  pizzaToppings: "",

  pizzaSlice: function() {
    var kindIncrease = 0;
    if (this.pizzaToppings === "pepperoni") {
      kindIncrease += 2;
    }
    if(this.pizzaSize === 12) {
      return (6 + kindIncrease);
    } else if (this.pizzaSize === 16) {
      return (8 + kindIncrease);
    } else if (this.pizzaSize === 20) {
      return (10 + kindIncrease);
    } else {
      return false;
    }
   }
 };
