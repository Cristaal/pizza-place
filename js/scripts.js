var PizzaPlace = {
  pizzaSizes: "",
  pizzaToppings: "",

  pizzaSlice: function() {
    var kindIncrease = 0;
    if (this.pizzaToppings === "pepperoni") {
      kindIncrease += 2;
    }
    if(this.pizzaSize === "small") {
      return (6 + kindIncrease);
    } else if (this.pizzaSize === "medium") {
      return (8 + kindIncrease);
    } else if (this.pizzaSize === "large") {
      return (10 + kindIncrease);
    } else {
      return false;
    }
   }
 };
 $(document).ready(function () {
   $("form#new-pizza").submit(function(event) {
     event.preventDefault();

     var newPizzaPlace = Object.create(PizzaPlace);
     newPizzaPlace.pizzaSize = $("#pizzaSize").val();
     newPizzaPlace.pizzaToppings = $("#pizzaTopping").val();

     $("#pizzas").append(newPizzaPlace.pizzaSize + " " + newPizzaPlace.pizzaToppings + " - " + newPizzaPlace.pizzaSlice() + " slices" + "</br>");
     $("#pizzaSize").val('');
     $("#pizzaTopping").val('');
   });
});
