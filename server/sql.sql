-- Active: 1700814440885@@176.58.119.63@3306@huludeig_order
USE huludeig_order;

CREATE TABLE IF NOT EXISTS category (
    categoryId INT PRIMARY KEY AUTO_INCREMENT,
    categoryName VARCHAR(255),
    amharicName VARCHAR(255)
);
-- ALTER TABLE foods
-- ADD COLUMN imageUrl VARCHAR(255) AFTER price;
-- SELECT * FROM foods;

CREATE TABLE IF NOT EXISTS foods (
    foodId INT PRIMARY KEY AUTO_INCREMENT,
    categoryId INT,
    foodName VARCHAR(255),
    amharicName VARCHAR(255),
    price DECIMAL(10, 2),
    imageurl VARCHAR(255)
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
    amount DECIMAL(10,2),
    totalPrice DECIMAL(10,2),
    FOREIGN KEY (waiterId) REFERENCES waiter(waiterId) ON DELETE SET NULL,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS singleOrder (
    singleOrderId INT PRIMARY KEY AUTO_INCREMENT,
    orderId INT,
    foodId INT,
    FOREIGN KEY (orderId) REFERENCES orders(orderId) ON DELETE CASCADE,
    FOREIGN KEY (foodId) REFERENCES foods(foodId) ON DELETE SET NULL
);


