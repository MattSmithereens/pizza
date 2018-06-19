// pizza business

function Pizza(size, toppings, toppingPrice, piePrice) {
  this.size = size;
  this.toppings = toppings;
  this.toppingPrice = toppingPrice;
  this.piePrice = piePrice;
}

Pizza.prototype.toppingCost = function() {
  this.toppingPrice = this.toppings.length * 2
}

Pizza.prototype.pieCost = function() {
  if (this.size === "Small") {
    this.piePrice = 6
  } else if (this.size === "Medium") {
    this.piePrice = 10
  } else if (this.size === "Large") {
    this.piePrice = 14
  } else {
    alert("You need to tell us what size AMAZING pizza you'd like!")
  }
}



// hot n tasty user interface

$(document).ready(function() {
  $("form#buttons").submit(function(event){
    event.preventDefault()
    var inputtedSize = $("input:radio[name=size]:checked").val();
    var toppingArray = Array()
    var newPizza = new Pizza(inputtedSize, toppingArray);
    $("input:checkbox[name=topping]:checked").each(function() {
  	toppingArray.push($(this).val())
    newPizza.toppingCost();
    newPizza.pieCost();
    var totalCharge = parseInt(newPizza.toppingPrice) + parseInt(newPizza.piePrice)
    $(".receipt").show();
    $(".output").text("Your " + newPizza.size + " pizza with " + newPizza.toppings + " will be $" + totalCharge + ".");
    })
  })
})
