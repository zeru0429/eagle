const query = require('../config/db');
const categoryQuery = require('../querys/category.query');

const categoryService = {
   getAllcategory: async ()=>{
     try{
      const rows = await query(categoryQuery.getAllCategory);
      return rows;
     }
     catch(e){
      console.log(e);
      return null;
     }

   },
   getSinglecategory: async (id)=>{
      try{
       const rows = await query(categoryQuery.getSingleCategory,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    updateSinglecategory: async (data)=>{
      try{
       const rows = await query(categoryQuery.updateSingleCategory,[data.categoryName,data.amharicName,data.categoryId]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    deleteSinglecategory: async (id)=>{
      try{
       const rows = await query(categoryQuery.deleteSingleCategory,[id]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },

    createCategory: async (data)=>{
      try{
       const rows = await query(categoryQuery.createSingleCategory,[data.categoryName,data.amharicName]);
       return rows;
      }
      catch(e){
       console.log(e);
       return null;
      }
 
    },




}

module.exports = categoryService;