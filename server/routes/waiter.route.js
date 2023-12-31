const express = require('express');
const waiterRoutes = express.Router();
const waiterController = require('../controllers/waiter.controller');

// Routes
waiterRoutes.get('/api/waiters', waiterController.getAllWaiters);
waiterRoutes.get('/api/waiters/:id', waiterController.getSingleWaiter);
waiterRoutes.post('/api/waiters', waiterController.createWaiter);
waiterRoutes.put('/api/waiters/:id', waiterController.updateWaiter);
waiterRoutes.delete('/api/waiters/:id', waiterController.deleteWaiter);

module.exports = waiterRoutes;