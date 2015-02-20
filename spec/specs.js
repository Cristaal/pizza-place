describe("PizzaPlace", function() {
  describe("pizzaSlice", function() {
    it("will return the number of slices for a small pizza", function() {
      var testPizzaPlace = Object.create(PizzaPlace);
      testPizzaPlace.pizzaSize = 12;
      expect(testPizzaPlace.pizzaSlice()).to.equal(6);
    });
  });
  describe("pizzaSlice", function() {
    it("will return the number of slices for a medium pizza", function() {
      var testPizzaPlace = Object.create(PizzaPlace);
      testPizzaPlace.pizzaSize = 16;
      expect(testPizzaPlace.pizzaSlice()).to.equal(8);
    });
  });
  describe("pizzaSlice", function() {
    it("will return the number of slices for a large pizza", function() {
      var testPizzaPlace = Object.create(PizzaPlace);
      testPizzaPlace.pizzaSize = 20;
      expect(testPizzaPlace.pizzaSlice()).to.equal(10);
    });
  });
  describe("withPepperoni", function() {
    it("will returm true if the pizza has pepperoni", function() {
      var testPizzaPlace = Object.create(PizzaPlace);
      testPizzaPlace.pizzaTopping = "pepperoni";
      expect(testPizzaPlace.withPepperoni()).to.equal(true);
    });
  });
});
