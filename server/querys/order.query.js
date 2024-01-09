const orderQuery = {
   getAllOrders: `
   
SELECT
JSON_OBJECT(
  'waiter', JSON_OBJECT('fullName', w.fullName),
  'username', u.username,
  'orderId', o.orderId,
  'totalPrice', o.totalPrice,
  'createdDate', o.createdDate,
  'itemCount', o.totalItem,
  'singleOrders', IFNULL(
    JSON_ARRAYAGG(
      JSON_OBJECT(
        'foodName', f.foodName,
        'imageUrl',f.imageUrl,
        'amharicName', f.amharicName,
        'category', c.categoryName,  
        'amount', so.amount,
        'singleTotal', so.singleTotal,
        'singleOrderId',so.singleOrderId
      )
    ),
    JSON_ARRAY()
  )
) AS orderData
FROM huludeig_order.orders o
JOIN huludeig_order.waiter w ON w.waiterId = o.waiterId
JOIN huludeig_order.users u ON u.userId = o.userId
LEFT JOIN huludeig_order.singleOrder so ON so.orderId = o.orderId
LEFT JOIN huludeig_order.foods f ON f.foodId = so.foodId
LEFT JOIN huludeig_order.category c ON c.categoryId = f.categoryId  
WHERE o.userId = ?
GROUP BY o.orderId;
`,
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
   so.amount,
   so.singleTotal AS totalPrice
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
   createOrder: `insert into orders (createdDate,waiterId, userId,totalItem,totalPrice) values (now(),?, ?,?,?);`,
   createSingleOrders: `insert into singleOrder (orderId, foodId,amount,singleTotal) values (?, ?,?,?);`,
}

module.exports = orderQuery;
