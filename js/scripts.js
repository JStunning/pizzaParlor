function Pizza(toppings, size, number){
  this.toppings = toppings;
  this.size = size;
  this.number = number
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

    for(var i = 0; i < pizzas.length; i++) {
      $("#orderBox").append(`${pizzas[i].toppings} <br> ${pizzas[i].size} <br> ${pizzas[i].number}`)

    }

  })

});

