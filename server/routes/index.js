const express = require('express');

const  appRoutes = express.Router();

// import ms routes
const categoryRoutes = require('./category.route');
const foodRoutes = require('./food.route');
const orderRoutes = require('./order.route');
const userRoutes = require('./user.route');
const waiterRoutes = require('./waiter.route');
const loginRoutes = require('./login.route');

// include routes
appRoutes.use(categoryRoutes);
appRoutes.use(foodRoutes);
appRoutes.use(orderRoutes);
appRoutes.use(waiterRoutes);
appRoutes.use(userRoutes);
appRoutes.use(loginRoutes);


module.exports = appRoutes;

