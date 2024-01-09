-- Active: 1700814440885@@176.58.119.63@3306@huludeig_order
USE huludeig_order;

CREATE TABLE IF NOT EXISTS category (
    categoryId INT PRIMARY KEY AUTO_INCREMENT,
    categoryName VARCHAR(255),
    amharicName VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS foods (
    foodId INT PRIMARY KEY AUTO_INCREMENT,
    categoryId INT,
    foodName VARCHAR(255),
    amharicName VARCHAR(255),
    price DECIMAL(10, 2),
    imageUrl VARCHAR(255), -- Added imageUrl column
    FOREIGN KEY (categoryId) REFERENCES category(categoryId) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS waiter (
    waiterId INT PRIMARY KEY AUTO_INCREMENT,
    fullName VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(35)
);

CREATE TABLE IF NOT EXISTS profile (
    profileId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    gender VARCHAR(10),
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS orders (
    orderId INT PRIMARY KEY AUTO_INCREMENT,
    createdDate DATETIME,
    waiterId INT,
    userId INT,
    totalItem DECIMAL(10, 2), -- Changed amount to totalItem
    totalPrice DECIMAL(10, 2),
    FOREIGN KEY (waiterId) REFERENCES waiter(waiterId) ON DELETE SET NULL,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS singleOrder (
    singleOrderId INT PRIMARY KEY AUTO_INCREMENT,
    orderId INT,
    foodId INT,
    amount INT,
    singleTotal DECIMAL(10, 2),
    FOREIGN KEY (orderId) REFERENCES orders(orderId) ON DELETE CASCADE,
    FOREIGN KEY (foodId) REFERENCES foods(foodId) ON DELETE SET NULL
);

SELECT * FROM orders;

SELECT * FROM singleOrder;

SELECT * FROM foods;
SELECT * FROM users;

SELECT * from profile;
INSERT INTO users (username,password,role) VALUES ('mule','$2b$10$KxrMOkx/NPIiMzgzBnpuHO.y6R2lJrC4TeZHnd/RkEg3ZSHxF4u0O','admin');
INSERT INTO profile(`userId`,firstname,lastname,gender) VALUES(1,'Muluken','Mengistu','male');

SHOW TABLEs;
   SELECT
   o.orderId,
   so.singleOrderId,
   o.createdDate,
   w.fullName AS waiterFullName,
   p.firstname,
   p.lastname,
   c.categoryName,
   f.foodName,
   f.price,
   so.amount,
   so.singleTotal AS totalPrice
FROM
   huludeig_order.singleOrder so
JOIN
   huludeig_order.orders o ON o.orderId = so.orderId
JOIN
   huludeig_order.waiter w ON w.waiterId = o.waiterId
JOIN
   huludeig_order.users u ON u.userId = o.userId
JOIN
   huludeig_order.profile p ON p.userId = u.userId
JOIN
   huludeig_order.foods f ON f.foodId = so.foodId
JOIN
   huludeig_order.category c ON c.categoryId = f.categoryId;



SELECT
    o.orderId,
    o.createdDate,
    w.fullName AS waiterName,
    u.username,
    o.totalItem,
    o.totalPrice,
    f.foodName,
    f.imageUrl,
    so.amount,
    so.singleTotal
FROM
    huludeig_order.orders o
JOIN
    huludeig_order.waiter w ON w.waiterId = o.waiterId
JOIN
    huludeig_order.users u ON u.userId = o.userId
LEFT JOIN
    huludeig_order.singleOrder so ON so.orderId = o.orderId
LEFT JOIN
    huludeig_order.foods f ON f.foodId = so.foodId
WHERE
    o.userId = 2; -- Placeholder for the parameter value





SELECT
  JSON_OBJECT(
    'waiter', JSON_OBJECT('fullName', w.fullName),
    'username', u.username,
    'totalPrice', o.totalPrice,
    'itemCount', o.totalItem,
    'singleOrders', IFNULL(
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'foodName', f.foodName,
          'amharicName', f.amharicName,
          'category', c.categoryName,  -- Assuming this column exists in the 'category' table
          'amount', so.amount,
          'singleTotal', so.singleTotal
        )
      ),
      JSON_ARRAY()
    )
  ) AS orderData
FROM huludeig_order.orders o
JOIN huludeig_order.waiter w ON w.waiterId = o.waiterId
JOIN huludeig_order.users u ON u.userId = o.userId
LEFT JOIN huludeig_order.singleOrder so ON so.orderId = o.orderId
LEFT JOIN huludeig_order.foods f ON f.foodId = so.foodId
LEFT JOIN huludeig_order.category c ON c.categoryId = f.categoryId  -- Assuming this column exists in the 'category' table
WHERE o.userId = 7
GROUP BY o.orderId;


OpenAi@2023