const express = require('express');
const foodRoutes = express.Router();
const foodController = require('../controllers/food.controller');
const multer = require('multer');
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, 'uploads/'); // Set the destination folder for your uploads
   },
   filename: function (req, file, cb) {
     // Create a unique filename for each uploaded file
     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
     const fileExtension = file.originalname.split('.').pop();
     cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExtension);
   }
 });

 const upload = multer({ storage: storage });


// include routes
foodRoutes.get('/api/food',foodController.getAllfood);
foodRoutes.get('/api/food/:id',foodController.getSingleategory);
foodRoutes.put('/api/food/:id',foodController.updatefood);
foodRoutes.delete('/api/food/:id',foodController.deletefood);
foodRoutes.post('/api/food',upload.single('image'), foodController.createfood);
foodRoutes.get('/api/foodBycategory/:id',foodController.getAllFoodByCategory);



module.exports =foodRoutes;

