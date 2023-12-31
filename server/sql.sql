USE huludeig_order;

CREATE TABLE IF NOT EXISTS huludeig_order.category (
    categoryId INT PRIMARY KEY AUTO_INCREMENT,
    categoryName VARCHAR(255),
    amharicName VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS huludeig_order.foods (
    foodId INT PRIMARY KEY AUTO_INCREMENT,
    categoryId INT,
    foodName VARCHAR(255),
    amharicName VARCHAR(255),
    price DECIMAL(10, 2),
    FOREIGN KEY (categoryId) REFERENCES category(categoryId)
);

CREATE TABLE IF NOT EXISTS huludeig_order.waiter (
    waiterId INT PRIMARY KEY AUTO_INCREMENT,
    fullName VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS huludeig_order.users (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(35)
);

CREATE TABLE IF NOT EXISTS huludeig_order.profile (
    profileId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    gender VARCHAR(10),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE IF NOT EXISTS huludeig_order.orders (
    orderId INT PRIMARY KEY AUTO_INCREMENT,
    createdDate DATETIME,
    waiterId INT,
    userId INT,
    amount DECIMAL(10,2),
    totalPrice DECIMAL(10,2),
    FOREIGN KEY (waiterId) REFERENCES waiter(waiterId),
    FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE IF NOT EXISTS huludeig_order.singleOrder (
    singleOrderId INT PRIMARY KEY AUTO_INCREMENT,
    orderId INT,
    foodId INT,
    FOREIGN KEY (orderId) REFERENCES orders(orderId),
    FOREIGN KEY (foodId) REFERENCES foods(foodId)
);