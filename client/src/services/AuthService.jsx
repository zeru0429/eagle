import axios from '../util/axios'

const AuthService  = {
   login: async (username,password) =>{
      try{
            
     const responce =  await axios.post('/api/login',{ username,password } );
     console.log(responce.data.response.data);

      }catch(error){

        // console.log(error.response.data.message);
         window.alert(error.response.data.message)
      }
      
   


   }


}

export default AuthService;

