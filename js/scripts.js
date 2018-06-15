// business

// function Pizza(size, toppingArray, price) {
//   this.size = inputtedSize;
//   this.toppings = toppingArray;
//   this.price = [];
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
    	});
      if (inputtedSize === undefined) {
        alert("You need to tell us what size AMAZING pizza you'd like!");
      } else {
        console.log(inputtedSize + " pizza with " + toppingArray);
      }

  })
})
