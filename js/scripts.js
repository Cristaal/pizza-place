var PizzaPlace = {
  pizzaSizes: [12, 16, 20],

  pizzaSlice: function() {
    if(this.pizzaSize === 12) {
      return 6;
    } else {
      return false;
    }
  }
};
