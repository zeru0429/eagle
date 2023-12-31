const query = require('../config/db');
const orderQuery = require('../querys/order.query');

const orderService = {
   getAllOrder: async ()=>{
     try{
      const rows = await query(orderQuery.getAllOrder);
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
      try{
       const rows = await query(orderQuery.createSingleOrder,[data.englishName,data.amharicName]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },




}

module.exports = orderService;