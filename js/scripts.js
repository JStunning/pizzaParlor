function Pizza(toppings, size, number){
  this.toppings = toppings;
  this.size = size;
  this.number = number

  if (size == "Small"){
    this.price = 5 * this.number
  } else if (size == "Medium") {
    this.price = 10 * this.number
  } else {
    this.price = 15 * this.number
  }

  console.log(this.price)
};

var pizzas = []

$(document).ready(function(){
  
  $("#orderButton").click(function(event){
    event.preventDefault();

    var toppings = $("#toppings").val();
    var sizes = $("#sizes").val();
    var number = $("#number").val();

    var pizza = new Pizza(toppings, sizes, number)
    pizzas.push(pizza);
    console.log(pizzas)

    for(var i = 0; i < pizzas.length; i++){
      $("#orderBox").text("Your Receipt")
      $("#orderBox").append(`<br> ${pizzas[i].number}x ${pizzas[i].toppings} <br> ${pizzas[i].size} <br> $${pizzas[i].price}`);
    }
  })

});

