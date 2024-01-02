import employeeAuthHeader, { decodeTokenPayload } from '../util/auth.header';

import axios from '../util/axios'
const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("employee", JSON.stringify(token));

        // Use decodedToken as needed
        const decodedToken = await employeeAuthHeader();

        // Check for specific properties in the decoded token
        if (decodedToken && decodedToken.employee_id && decodedToken.employee_first_name && decodedToken.employee_role) {
         
         return decodedToken;
          return true; // Return true if the decoded token has the expected properties
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      window.alert(error.response.data.message);
    }

    return false; // Return false if login fails or the decoded token is missing expected properties
  }
}

export default AuthService;
