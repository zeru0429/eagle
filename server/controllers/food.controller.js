const foodService = require('../services/food.service');
const dotenv = require('dotenv');
dotenv.config();

const foodController ={
   getAllfood: async (req,res)=>{
      const rows = await foodService.getAllfood();
      res.status(200).json({
         sucess: true,
         data: rows
      });
   },

   getSingleategory: async (req,res)=>{
      const id = req.params.id.substring(1);
      const rows = await foodService.getSinglefood(id);
      res.status(200).json({
         success: true,
         data: rows
      })

   },

   deletefood: async (req,res)=>{
      const id = req.params.id.substring(1);
      const isDelated = await foodService.deleteSinglefood(id);
      
      if(!isDelated){
        return  res.status(500).json({
            sucess: false,
            message: `fail to delete catagory`
         })

      }
      res.status(200).json({
         sucess: true,
         data: "food delated sucessfully"
      })
   

   },

   updatefood: async (req,res)=>{
      const id = req.params.id.substring(1);
      const {foodName, amharicName , price, categoryId} = req.body;
      // console.log({foodName, amharicName , price, categoryId} );

      if(!foodName || !amharicName || !id || !price || !categoryId){
         return res.status(500).json({
            success: false,
            message: 'all fields are required '
          });
       }

       req.body.foodId = id;
    const isfoodUpdated = await foodService.updateSinglefood(req.body); 

    if(!isfoodUpdated){
      return res.status(500).json({
          success: false,
          message: 'fail to  update catagory '
        });
     }
     
     return res.status(200).json({
       success: true,
       message: 'catagory updated sucessfully'
     });
 

   },
  

   createfood: async (req,res)=>{
      const newFileName = `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/uploads/`+req.file.filename;
      req.body.imageUrl = newFileName.toString();
     
      
    const {foodName, amharicName , price, categoryId} = req.body;
    console.log({foodName, amharicName , price, categoryId,newFileName});
    if(!foodName || !amharicName || !price || !categoryId){
      return res.status(500).json({
         success: false,
         message: 'all fields are required '
       });
    }

    const isfoodAdded = await foodService.createSinglefood(req.body); 
    if(!isfoodAdded){
     return res.status(500).json({
         success: false,
         message: 'fail to add catagory '
       });
    }
    
    return res.status(200).json({
      success: true,
      message: 'catagory added sucessfully'
    });

     

   },

   getAllFoodByCategory:  async (req,res)=>{
      const id = req.params.id.substring(1);
      const rows = await foodService.getAllFoodByCategory(id);
      res.status(200).json({
         success: true,
         data: rows
      })

   },



}

module.exports = foodController;