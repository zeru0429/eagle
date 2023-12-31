const express = require('express');
const categoryRoutes = express.Router();

const catagoryController = require("../controllers/catagory.controller");

// include routes
categoryRoutes.get('/api/catagory',catagoryController.getAllCategory);
categoryRoutes.get('/api/catagory/:id',catagoryController.getSingleategory);
categoryRoutes.put('/api/catagory/:id',catagoryController.updateCategory);
categoryRoutes.delete('/api/catagory/:id',catagoryController.deleteCategory);
categoryRoutes.post('/api/catagory',catagoryController.createCategory);

module.exports =categoryRoutes;

