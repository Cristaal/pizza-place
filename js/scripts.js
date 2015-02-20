var PizzaPlace = {
  pizzaSizes: [12, 16, 20],
  pizzaToppings: [],

  withPepperoni: function() {
    if(this.pizzaToppings.indexOf("pepperoni")) {
      return true;
    } else {
      return false;
    }
  },

  pizzaSlice: function() {
    if(this.pizzaSize === 12) {
      return 6;
    } else if (this.pizzaSize === 16) {
      return 8;
    } else if (this.pizzaSize === 20) {
      return 10;
    } else {
      return false;
    }
   }
 };
