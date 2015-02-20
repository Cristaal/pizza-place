describe("PizzaPlace", function() {
  describe("pizzaSlice", function() {
    it("will return the number of slices for a small pizza", function() {
      var testPizzaPlace = Object.create(PizzaPlace);
      testPizzaPlace.pizzaSize = 12;
      expect(testPizzaPlace.pizzaSlice()).to.equal(6);
    });
  });
});
