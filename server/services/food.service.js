const query = require('../config/db');
const foodQuery = require('../querys/food.query');

const foodService = {
   getAllfood: async ()=>{
     try{
      const rows = await query(foodQuery.getAllFood);
      return rows;
     }
     catch(e){
      console.log(e);
      return null;
     }

   },
   getSinglefood: async (id)=>{
      try{
       const rows = await query(foodQuery.getSingleFood,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    updateSinglefood: async (id)=>{
      try{
       const rows = await query(foodQuery.updateSingleFood,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    deleteSinglefood: async (id)=>{
      try{
       const rows = await query(foodQuery.deleteSingleFood,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    createSinglefood: async (data)=>{
      try{
       const rows = await query(foodQuery.createSingleFood[data.categoryId,data.foodName, data.amharicName, data.price,data.imageurl]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    getAllFoodByCategory:  async (id)=>{
      try{
       const rows = await query(foodQuery.getAllFoodByCategory,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },


}

module.exports = foodService;