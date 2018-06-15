// business

var newPizza = function Pizza(size, [], price) {
  this.size = inputtedSize;
  this.toppings = [];
  this.price = [];
}

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
      console.log(toppingArray);
      console.log(inputtedSize);

  })
})
