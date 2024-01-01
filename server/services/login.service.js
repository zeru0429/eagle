const query = require('../config/db');
const loginQuery = require('../querys/login.query');

const loginService = {
  getUserByUsername: async (data)=>{
     try{
      const rows = await query(loginQuery.getUserByUsername,[data]);
      return rows;
     }
     catch(e){
      console.log(e);
      return null;
     }

   },
   getUserByUserId: async (data)=>{
    try{
     const rows = await query(loginQuery.getUserByUserId,[data]);
     return rows;
    }
    catch(e){
     console.log(e);
     return null;
    }

  },


   }


module.exports =loginService;

