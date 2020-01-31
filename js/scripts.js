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

var pizzas = [];

$(document).ready(function(){

  var priceArr = [];

  var totalPrice = 0;

 

  
  $("#addButton").click(function(event){
    event.preventDefault();

    var toppings = $("#toppings").val();
    var sizes = $("#sizes").val();
    var number = $("#number").val();

    

    var pizza = new Pizza(toppings, sizes, number)
    pizzas.push(pizza);


    pizzas.forEach((pizza) => {
      $("#receipt").text(`Your Receipt`)
      $("#orderBox").append(`<div id="pizza-${priceArr.length}"><br> ${pizza.number}x ${pizza.toppings} <br> ${pizza.size} <br> $${pizza.price()}</div>`);
    })
    //(var i = 0; i < pizzas.length; i++){

    $("#orderBox").show();
    $("#orderButtonBox").show();


    for(var i = 0; i < pizzas.length; i++) {
      priceArr.push(pizzas[i].total);
    }

    priceArr.forEach(price => totalPrice += price);

    console.log(priceArr)
    console.log(totalPrice)

    $("#receiptTotal").show();
    $("#receiptTotal").text(`Total: ${totalPrice}`)

    pizzas = [];

  })

    $("#totalButton").click(function(){

      // var grandTotal = 0;

      // for(var i = 0; i < pizzas.length; i++) {
      //   console.log("pizzas" + pizzas)
      //   console.log("pizzas price" + pizzas[i].price())

      //   grandTotal += pizzas[i].price();
      // }
      // $("#receiptTotal").show();
      // $("#receiptTotal").text(`Total: ${grandTotal}`)

      // pizzas = [];
  })

});

