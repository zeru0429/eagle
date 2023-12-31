const loginQuery = {
   getUserByUsername: `SELECT * FROM users WHERE username = ?;`,
   getUserByUserId: `SELECT * FROM users WHERE userId= ? `
};

module.exports = loginQuery;