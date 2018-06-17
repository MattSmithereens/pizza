// pizza business

function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

// hot n tasty user interface

$(document).ready(function() {
  $("form#buttons").submit(function(event){
    event.preventDefault()
    var inputtedSize = $("input:radio[name=size]:checked").val();
    var toppingArray = Array()
    $("input:checkbox[name=topping]:checked").each(function() {
  		toppingArray.push($(this).val())
    var toppingsPrice = toppingArray.length * 2;
    if (inputtedSize === "Small") {
      var newPizza = new Pizza(inputtedSize, toppingArray, toppingsPrice + 6);
    } else if (inputtedSize === "Medium") {
      var newPizza = new Pizza(inputtedSize, toppingArray, toppingsPrice + 10);
    } else if (inputtedSize === "Large") {
      var newPizza = new Pizza(inputtedSize, toppingArray, toppingsPrice + 14);
    } else {
      alert("You need to tell us what size AMAZING pizza you'd like!")
    }
      $(".receipt").show();
      $(".output").text("Your " + newPizza.size + " pizza with " + newPizza.toppings + " will be $" + newPizza.price + ".");
    })
  })
})
