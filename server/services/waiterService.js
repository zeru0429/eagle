const query = require('../config/db');
const waiterQuery = require('../querys/waiter.query');

const waiterService = {
   getAllfood: async ()=>{
     try{
      const rows = await query(waiterQuery.getAllfood);
      return rows;
     }
     catch(e){
      console.log(e);
      return null;
     }

   },
   getSinglefood: async (id)=>{
      try{
       const rows = await query(waiterQuery.getSinglefood,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

   }


module.exports =waiterService;

