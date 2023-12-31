const loginService = require('../services/login.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


const loginController = {
   loginUser: async (req, res) => {
      try {
         const { username, password } = req.body;
         console.log( username, password );
         if(!username || !password ){
            return res.status(404).json({
               status: false,
               message: 'all fieldsare required'
            });
         }


         const user = await loginService.getUserByUsername(username);
         console.log(user);
         if (!user.length) {
            return res.status(404).json({
               status: false,
               message: 'no user is found please register first'
            });
         }
         else{

            const  userId = user[0].userId;
            const dbPassword = user[0].password;

            const isMatch = bcrypt.compareSync(password, dbPassword);
               if(!isMatch){
                  res.status(401).json({ message: 'incorrect password' });
               }
               const token = jwt.sign(
                  { userId, username },
                  process.env.JWT_SECRET,
                  { expiresIn: '1h' }
                );
              
               res.status(200).json({ message: 'Login successful', token,userId });
            }


         }
      
       catch (error) {
         // Handle any errors that occur during the login process
         res.status(500).json({ message: 'An error occurred during login', error: error.message });
      }
   },
};

module.exports = loginController;