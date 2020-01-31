function Pizza(toppings, size, number){
  this.toppings = toppings;
  this.size = size;
  this.number = number
};

Pizza.prototype.price = function() {
    this.total = 0;
  if (this.size == "Small"){
    return this.total = 5 * this.number
  } else if (this.size == "Medium") {
    return this.total = 10 * this.number
  } else {
    return this.total = 15 * this.number
  }
}

var pizzas = []


$(document).ready(function(){
  
  $("#addButton").click(function(event){
    event.preventDefault();

    var toppings = $("#toppings").val();
    var sizes = $("#sizes").val();
    var number = $("#number").val();

    

    var pizza = new Pizza(toppings, sizes, number)
    pizzas.push(pizza);

    for(var i = 0; i < pizzas.length; i++){
      $("#receipt").text(`<Your Receipt`)
      $("#orderBox").append(`<br> ${pizzas[i].number}x ${pizzas[i].toppings} <br> ${pizzas[i].size} <br> $${pizzas[i].price()}`);
    }

    $("#orderButtonBox").show();
    })

    $("#totalButton").click(function(){

      var grandTotal = 0;

      for(var i = 0; i < pizzas.length; i++) {
        console.log("pizzas" + pizzas)
        console.log("pizzas price" + pizzas[i].price())

        grandTotal += pizzas[i].price();
      }

      console.log(grandTotal)
      $("#orderButtonBox").text(`Total: ${grandTotal}`)

    pizzas = [];
  })

});

