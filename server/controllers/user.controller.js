const userService = require('../services/user.service');
const dotenv =  require('dotenv');
const  bcrypt = require('bcrypt'); 
const  jwt = require('jsonwebtoken');
dotenv.config();

const userController ={
   getAlluser: async (req,res)=>{
         const rows = await  userService.getAlluser();
         res.status(200).json({
            sucess: true,
            data: rows
         });

   },

   getAlluserInfo: async (req,res)=>{
      const rows = await  userService.getAlluserInfo();
      res.status(200).json({
         sucess: true,
         data: rows
      });

},

   getSingluser: async (req,res)=>{
      const id = req.params.id.substring(1);
      const rows = await  userService.getSingleuser(id);
      res.status(200).json({
         sucess: true,
         data: rows
      });

   },

   deleteuser: async (req,res)=>{
      const id = req.params.id.substring(1);
      const isuser =await userService.getSingleuser(id);
      if(!isuser.length){
         return  res.status(500).json({
            sucess: false,
            message: `user is not found to delete`
         })
      }
      const isDelatedProfile = await userService.deleteSingleuserProfile(id);

      const isDelated = await userService.deleteSingleuser(id);
      
      if(!isDelated){
        return  res.status(500).json({
            sucess: false,
            message: `fail to delete user`
         })

      }
      res.status(200).json({
         sucess: true,
         data: "User delated sucessfully"
      })
   

   },

   updateuser: async (req,res)=>{
      const id = req.params.id.substring(1);
      const {username, password } = req.body;

      if(!username || !password || !id){
         return res.status(500).json({
            success: false,
            message: 'all fields are required '
          });
       }

       req.body.categoryId = id;
    const isUserUpdated = await userService.updateSingleuser(req.body); 

    if(!isUserUpdated){
      return res.status(500).json({
          success: false,
          message: 'fail to  update user '
        });
     }
     
     return res.status(200).json({
       success: true,
       message: 'user updated sucessfully'
     });
 


   },

   createuser: async (req,res)=>{
      const {username, password,firstName,lastName,gender ,role} = req.body;
      if(!password	 || !username || !firstName || !lastName || !gender || !role ){
        return res.status(500).json({
           success: false,
           message: 'all fields are required '
         });
      }
      const userNameIsUsed = await userService.getSingleuserByUserName(username);
      if(userNameIsUsed){
         return res.status(500).json({
            success: false,
            message: 'username is alredy taken '
          });

      }
      else{

         // encript password
         const saltRounds = 10; // Specify a number of rounds
         const salt = bcrypt.genSaltSync(saltRounds);
         req.body.password = bcrypt.hashSync(password, salt);

         const isUserAdded = await userService.createSingleuser(req.body); 
     
        
         if(!isUserAdded){
         return res.status(500).json({
            success: false,
            message: 'fail to add user '
            });
         }
         else{
             req.body.userId = isUserAdded.insertId;
             
            //profile section
            const isUserProfileAdded = await userService.createSingleuserProfile(req.body); 
            console.log(isUserProfileAdded);
              return res.status(200).json({
         success: true,
         message: 'user added sucessfully'
         });

         }
         
       
   
       

      }
  
      

   },



}

module.exports = userController;


