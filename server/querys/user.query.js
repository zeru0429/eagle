const userQuery = {
   getAllUsers: `select * from users;`,
   getAllUsersInfo : `SELECT u.userId,u.role,u.username, p.firstname, p.lastname, p.gender
   FROM huludeig_order.users u
   JOIN huludeig_order.profile p ON u.userId = p.userId;`,
   getSingleUsers: `select * from users where userId = ?;`,
   getSingleUserByUsername: `select * from users where userId = ?;`,
   deleteSingleUsers: `delete from users where userId = ?;`,
   deleteSingleUsersProfile: `delete from profile where userId = ?;`,
   updateSingleUsers: `update users set username = ?, password = ? where userId = ?;`,
   updateSingleUsersProfile: `UPDATE profile SET firstname = ?, lastname = ?, gender = ? WHERE userId = ?;`,
   createSingleUsers: `insert into users (username, password,role) values (?, ?,?);`,

   createSingleUserProfile:`INSERT INTO huludeig_order.profile (userId,firstName,lastName,gender) VALUES(?,?,?,?);`,
}

module.exports = userQuery;
