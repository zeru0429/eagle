const orderService = require('../services/order.service');
const orderController ={
   getAllorder: async (req,res)=>{
      const rows = await orderService.getAllOrder();
      res.status(200).json({
         sucess: true,
         data: rows
      });
   },

   getAllorderInfo: async (req,res)=>{
      const rows = await orderService.getAllOrderInfo();
      res.status(200).json({
         sucess: true,
         data: rows
      });
   },

   getSingleategory: async (req,res)=>{
      const id = req.params.id.substring(1);
      const rows = await orderService.getSingleOrder(id);
      res.status(200).json({
         success: true,
         data: rows
      })

   },

   deleteorder: async (req,res)=>{
      const id = req.params.id.substring(1);
      const isDelated = await orderService.deleteSingleOrder(id);
      
      if(!isDelated){
        return  res.status(500).json({
            sucess: false,
            message: `fail to delete catagory`
         })

      }
      res.status(200).json({
         sucess: true,
         data: "order delated sucessfully"
      })
   

   },

   updateorder: async (req,res)=>{
      const id = req.params.id.substring(1);
      const {orderName, amharicName , price, categoryId} = req.body;

      if(!orderName || !amharicName || !id || !price || !categoryId){
         return res.status(500).json({
            success: false,
            message: 'all fields are required '
          });
       }

       req.body.orderId = id;
    const isorderUpdated = await orderService.updateSingleOrder(req.body); 

    if(!isorderUpdated){
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
  

   createorder: async (req,res)=>{
    const {orderName, amharicName , price, categoryId} = req.body;
    if(!orderName || !amharicName || !price || !categoryId){
      return res.status(500).json({
         success: false,
         message: 'all fields are required '
       });
    }

    const isorderAdded = await orderService.createSingleOrder(req.body); 
    if(!isorderAdded){
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

   getAllorderByCategory:  async (req,res)=>{
      const id = req.params.id.substring(1);
      const rows = await orderService.getAllorderByCategory(id);
      res.status(200).json({
         success: true,
         data: rows
      })

   },



}

module.exports = orderController;