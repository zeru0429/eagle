const orderQuery = {
   getAllOrders: `select * from orders;`,
   getAllOrdersInfo: `
   SELECT
   o.orderId,
   so.singleOrderId,
   o.createdDate,
   w.fullName AS waiterFullName,
   p.firstname,
   p.lastname,
   c.categoryName,
   f.foodName,
   f.price,
   o.amount,
   o.totalPrice
FROM
   huludeig_order.singleOrder so
JOIN
   huludeig_order.orders o ON o.orderId = so.orderId
JOIN
   huludeig_order.waiter w ON w.waiterId = o.waiterId
JOIN
   huludeig_order.users u ON u.userId = o.userId
JOIN
   huludeig_order.profile p ON p.userId = u.userId
JOIN
   huludeig_order.foods f ON f.foodId = so.foodId
JOIN
   huludeig_order.category c ON c.categoryId = f.categoryId;
   
   `,
   getSingleOrder: `select * from orders where orderId = ?;`,
   deleteSingleOrder: `delete from orders where orderId = ?;`,
   updateSingleOrder: `update orders set waiterId = ?, userId = ? where orderId = ?;`,
   createOrder: `insert into orders (waiterId, userId) values (?, ?);`,
   createSingleOrders: `insert into singleOrder (orderId, foodId) values (?, ?);`,
}

module.exports = orderQuery;
