const query = require('../config/db');
const userQuery = require('../querys/user.query');

const userService = {
   getAlluser: async ()=>{
     try{
      const rows = await query(userQuery.getAllUsers);
      return rows;
     }
     catch(e){
      console.log(e);
      return null;
     }

   },
   getSingleuser: async (id)=>{
      try{
       const rows = await query(userQuery.getSingleUsers,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    updateSingleuser: async (id)=>{
      try{
       const rows = await query(userQuery.updateSingleUsers,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    deleteSingleuser: async (id)=>{
      try{
       const rows = await query(userQuery.deleteSingleUsers,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    createSingleuser: async (data)=>{
      try{
       const rows = await query(userQuery.createSingleUsers,[data.englishName,data.amharicName]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },




}

module.exports = userService;