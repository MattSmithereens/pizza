// business

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

// pseudo code
// Pizza.prototype.pizzaPrice = function() {
//   if this.size contains small return 6
//
//   else if this.size contains medium return 8
//
//   else return 10
//
//   return amount of toppings * 2; +
// }

//
//   Pizza.prototype.orderedPizza = function() {
//     return "you ordered a " this.size + " pizza with " + this.toppingArray;
//   }
//
// }
//  console.log(Pizza.orderedPizza);
// Pizza.prototype.showPie = function() {
//   return this.size + ", " + this.price;
// }

// user interface

$(document).ready(function() {
  $("form#buttons").submit(function(event){
      event.preventDefault();
      var inputtedSize = $("input:radio[name=size]:checked").val();
      var toppingArray = Array();
      $("input:checkbox[name=topping]:checked").each(function() {
    		toppingArray.push($(this).val());
      var toppingsPrice = toppingArray.length * 2;
      console.log(toppingsPrice);
    	});
      if (inputtedSize === undefined) {
        alert("You need to tell us what size AMAZING pizza you'd like!");
      } else {
        var newPizza = new Pizza(inputtedSize, toppingArray)
        console.log(newPizza);
      }

  })
})
