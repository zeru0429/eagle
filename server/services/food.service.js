const query = require('../config/db');
const foodQuery = require('../querys/food.query');

const foodService = {
   getAllfood: async ()=>{
     try{
      const rows = await query(foodQuery.getAllfood);
      return rows;
     }
     catch(e){
      console.log(e);
      return null;
     }

   },
   getSinglefood: async (id)=>{
      try{
       const rows = await query(foodQuery.getSinglefood,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    updateSinglefood: async (id)=>{
      try{
       const rows = await query(foodQuery.updateSinglefood,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    deleteSinglefood: async (id)=>{
      try{
       const rows = await query(foodQuery.deleteSinglefood,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    createSinglefood: async (data)=>{
      try{
       const rows = await query(foodQuery.createSinglefood,[data.englishName,data.amharicName]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },




}

module.exports = foodService;