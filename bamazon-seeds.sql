-- Makes it so all of the following code will affect bamazonDB --
USE bamazonDB;

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Honey Nut Cheerios", "Groceries", 3.29, 55),
  ("Tropicana Orange Juice", "Groceries", 3.99, 55),
  ("Bounty Paper Towels","Groceries", 12.99, 110),
  ("Jelly Belly Jelly Beans 2 lbs", "Groceries", 9.98, 75),
  ("Ninja Blender 1000 Watt Base", "Kitchen", 80.99, 10),
  ("KitchenAid 4.5 Quart Stand Mixer", "Kitchen", 189.99, 15),
  ("KitchenAid Prep Bowls with Lids, Set of 4", "Kitchen", 12.74, 15),
  ("Wilson NFL Football", "Sports", 32.95, 200),
  ("Wilson Tour Slam Adult Strung Tennis Racket", "Sports", 29.99, 60),
  ("Harry Potter: The Complete 8-Film Collection", "Movies", 40.77, 45),
  ("Step Brothers", "Movies", 9.99, 125),
  ("The Incredibles", "Movies", 16.99, 200),
  ("Moana", "Movies", 19.99, 200),
  ("Frozen", "Movies", 19.99, 200),
  ("Inside Out", "Movies", 19.99, 200),
  ("JavaScript and JQuery: Interactive Front-End Web Development", "Books", 25.80, 35),
  ("Clean Code: A Handbook of Agile Software Craftsmanship", "Books", 31.56, 35),
  ("Play-Doh 10 Pack Case of Assorted Colors", "Toys", 7.99, 100),
  ("Giraffe Stuffed Animal", "Toys", 11.24, 100),
  ("Panda Stuffed Animal", "Toys", 13.99, 100);

-- UPDATE products
-- SET stock_quantity = 10
-- WHERE item_id = 5