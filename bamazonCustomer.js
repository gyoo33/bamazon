var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  displayData();
});

function displayData() {
    var query = "SELECT * FROM products";
    console.log(" ");
    connection.query(query, function(err, res) {
      if (err) throw err;
      //console.log(res);
      for (var i = 0; i < res.length; i++) {
        console.log("Product ID: " + res[i].item_id + ": " + res[i].product_name + " | $" + res[i].price);
      }
      console.log(" ");
      runSearch(res);
    });
}

var runSearch = function (res) {
  inquirer
    .prompt({
        name: "item",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      })
      .then(function(answer){
        var item = answer.item;
        inquirer
        .prompt({
        name: "quantity",
        type: "input",
        message: "How many units of the product you would like to buy?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    )
    .then(function(answer) {
      var quantity = answer.quantity;
      var query = "SELECT * FROM products WHERE ?";
      connection.query(query, {item_id: item}, function(err, res) {
        if (err) throw err;
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          if (quantity > res[i].stock_quantity) {
            console.log("Insufficient Quantity!");
          }
          else {
            var updatedQuantity = res[i].stock_quantity - quantity;
            updateProduct(updatedQuantity, item);
            console.log("You've purchased " + quantity + " " + res[i].product_name + "!\n");
          }
        }
      });
    });
});
}

function updateProduct(updatedQuantity, item) {
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          stock_quantity: updatedQuantity
        },
        {
          item_id: item
        }
      ],
      function(err, res) {
        displayData();
      }
    );
  }
