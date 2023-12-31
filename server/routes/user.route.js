const express = require('express');

const userRoutes = express.Router();
const userController = require('../controllers/user.controller');

// include routes
userRoutes.get('/api/user',userController.getAlluser);

userRoutes.get('/api/user',userController.getSingluser);
userRoutes.get('/api/usersInfo',userController.getAlluserInfo);
userRoutes.get('/api/user/:id',userController.updateuser);
userRoutes.put('/api/user/:id',userController.getAlluser);
userRoutes.post('/api/user',userController.createuser);
userRoutes.delete('/api/user/:id',userController.deleteuser);


module.exports =userRoutes;

