const query = require('../config/db');
const waiterQuery = require('../querys/waiter.query');

const waiterService = {
  getAllWaiters: async ()=>{
     try{
      const rows = await query(waiterQuery.getAllWaiters);
      return rows;
     }
     catch(e){
      console.log(e);
      return null;
     }

   },
   getSingleWaiter: async (id)=>{
      try{
       const rows = await query(waiterQuery.getSingleWaiter,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },
    deleteSingleWaiter:async (id)=>{
      try{
       const rows = await query(waiterQuery.deleteSingleWaiter,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },
    updateSingleWaiter:async (data)=>{
      try{
       const rows = await query(waiterQuery.updateSingleWaiter,[data.fullName,data.waiterId ]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },
    createSingleWaiter: async (data)=>{
      try{
       const rows = await query(waiterQuery.createSingleWaiter,[data]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },



   }


module.exports =waiterService;

