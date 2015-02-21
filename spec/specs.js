describe("PizzaPlace", function() {
  describe("pizzaSlice", function() {
    it("will return the number of slices for a small pizza", function() {
      var testPizzaPlace = Object.create(PizzaPlace);
      testPizzaPlace.pizzaSize = "small";
      expect(testPizzaPlace.pizzaSlice()).to.equal(6);
    });
  });
  describe("pizzaSlice", function() {
    it("will return the number of slices for a medium pizza", function() {
      var testPizzaPlace = Object.create(PizzaPlace);
      testPizzaPlace.pizzaSize = "medium";
      expect(testPizzaPlace.pizzaSlice()).to.equal(8);
    });
  });
  describe("pizzaSlice", function() {
    it("will add two slices if the pizza has pepperoni", function() {
      var testPizzaPlace = Object.create(PizzaPlace);
      testPizzaPlace.pizzaSize = "medium";
      testPizzaPlace.pizzaToppings = "pepperoni";
      expect(testPizzaPlace.pizzaSlice()).to.equal(10);
    });
  });
});
