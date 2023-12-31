const query = require('../config/db');
const loginQuery = require('../querys/login.query');

const loginService = {
   login: async (data)=>{
     try{
      const rows = await query(loginQuery.getUserByUsername,[username]);
      return rows;
     }
     catch(e){
      console.log(e);
      return null;
     }

   }

   }


module.exports =loginService;

