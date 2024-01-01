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
   getAllUsersInfo: async ()=>{
    try{
     const rows = await query(userQuery.getAllUsersInfo);
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

    getSingleUserByUsername :async (id)=>{
      try{
       const rows = await query(userQuery.getSingleUserByUsername,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },


    updateSingleuser: async (data)=>{
      try{
       const rows = await query(userQuery.updateSingleUsers,[data.username,data.password,data.id]);
    
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    updateSingleuserProfile: async (data)=>{
      try{
       const rows = await query(userQuery.updateSingleUsersProfile,[data.firstname,data.lastname, data.gender, data.id ]);
   
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
    deleteSingleUsersProfile: async (id)=>{
      try{
       const rows = await query(userQuery.deleteSingleUsersProfile,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    createSingleuser: async (data)=>{
      try{
        // console.log(data);
        
       const rows = await query(userQuery.createSingleUsers,[data.username, data.password,data.role]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    createSingleUserProfile: async (data)=>{
      try{
       const rows = await query(userQuery.createSingleUserProfile,[data.userId,data.firstName,data.lastName,data.gender]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },





}

module.exports = userService;