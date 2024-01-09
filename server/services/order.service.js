const query = require('../config/db');
const orderQuery = require('../querys/order.query');

const orderService = {
   getAllOrder: async (id)=>{
     try{
      const rows = await query(orderQuery.getAllOrders,[id]);
      return rows;
     }
     catch(e){
      console.log(e);
      return null;
     }

   },
   getAllOrdersInfo: async ()=>{
    try{
     const rows = await query(orderQuery.getAllOrdersInfo);
     return rows;
    }
    catch(e){
     console.log(e);
     return null;
    }

  },

   getSingleOrder: async (id)=>{
      try{
       const rows = await query(orderQuery.getSingleOrder,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

  updateSingleOrder: async (id)=>{
    try{
      const rows = await query(orderQuery.updateSingleOrder,[id]);
      return rows;
    }
    catch(e){
      console.log(e);
      return null;
    }

  },

  deleteSingleOrder: async (id)=>{
    try{
      const rows = await query(orderQuery.deleteSingleOrder,[id]);
      return rows;
    }
    catch(e){
      console.log(e);
      return null;
    }

  },

  createSingleOrder: async (data)=>{
    //orderId, foodId,amount,singleTotal
    try{
     // console.log(data.orderId, data.foodId,data.amount,data.singleTotal);
      const rows = await query(orderQuery.createSingleOrders,[data.orderId, data.foodId,data.amount,data.singleTotal]);
      return rows;
    }
    catch(e){
      console.log(e);
      return null;
    }

  },

  createOrder: async (data)=>{
    try{
      const rows = await query(orderQuery.createOrder,[data.waiterId,data.userId,data.totalItem,data.totalPrice]);
      return rows;
    }
    catch(e){
      console.log(e);
      return null;
    }

  },

}

module.exports = orderService;