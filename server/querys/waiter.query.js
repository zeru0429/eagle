const waiterQuery = {
   getAllWaiters: `SELECT * FROM waiter;`,
   getSingleWaiter: `SELECT * FROM waiter WHERE waiterId = ?;`,
   deleteSingleWaiter: `DELETE FROM waiter WHERE waiterId = ?;`,
   updateSingleWaiter: `UPDATE waiter SET fullName = ? WHERE waiterId = ?;`,
   createSingleWaiter: `INSERT INTO waiter (fullName) VALUES (?);`,
}

module.exports = waiterQuery;