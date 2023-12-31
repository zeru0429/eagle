const categoryQuery = {
   getAllCategory: `select * from category;`,
   getSingleCategory: `select * from category where categoryId = ?;`,
   deleteSingleCategory: `delete from category where categoryId = ?;`,
   updateSingleCategory: `update category set categoryName = ?, amharicName = ? where categoryId = ?;`,
   createSingleCategory: `insert into category (categoryName, amharicName) values (?, ?);`,
}

module.exports = categoryQuery;
