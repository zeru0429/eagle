const foodQuery = {
   getAllFood: `SELECT foods.*, category.categoryName AS categoryName
   FROM foods
   JOIN category ON foods.categoryId = category.categoryId;
   ;`,
   getAllFoodByCategory: `select * from foods where categoryId = ?;`,
   getSingleFood: `select * from foods where foodId = ?;`,
   deleteSingleFood: `delete from foods where foodId = ?;`,
   updateSingleFood: `update foods set categoryId = ? ,foodName = ?, amharicName = ?, price = ? where foodId = ?;`,
   createSingleFood: `insert into foods ( categoryId,foodName, amharicName, price,imageurl) values (?,?, ?, ?,?);`,
}

module.exports = foodQuery;
