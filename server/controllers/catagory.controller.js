const categoryService = require('../services/category.service');

const categoryController ={
   getAllCategory: async (req,res)=>{
      const rows = await categoryService.getAllcategory();
      res.status(200).json({
         sucess: true,
         data: rows
      });
   },

   getSingleategory: async (req,res)=>{
      const id = req.params.id.substring(1);
      const rows = await categoryService.getSinglecategory(id);
      res.status(200).json({
         success: true,
         data: rows
      })

   },

   deleteCategory: async (req,res)=>{
      const id = req.params.id.substring(1);
      const isDelated = await categoryService.deleteSinglecategory(id);
      
      if(!isDelated){
        return  res.status(500).json({
            sucess: false,
            message: `fail to delete catagory`
         })

      }
      res.status(200).json({
         sucess: true,
         message: "category delated sucessfully"
      })
   

   },

   updateCategory: async (req,res)=>{
      const id = req.params.id.substring(1);
     
      const {categoryName,amharicName } = req.body;
      // console.log(categoryName,amharicName,id);
      if(!categoryName || !amharicName || !id){
         return res.status(500).json({
            success: false,
            message: 'all fields are required '
          });
       }

       req.body.categoryId = id;
    const isCategoryUpdated = await categoryService.updateSinglecategory(req.body); 

    if(!isCategoryUpdated){
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

   createCategory: async (req,res)=>{

    const {categoryName, amharicName } = req.body;
    if(!categoryName || !amharicName){
      return res.status(500).json({
         success: false,
         message: 'all fields are required '
       });
    }

    const isCategoryAdded = await categoryService.createCategory(req.body); 


    if(!isCategoryAdded){
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


}

module.exports = categoryController;