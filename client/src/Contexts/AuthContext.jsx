import React, { useEffect, useContext, useState } from "react";
import employeeAuthHeader from "../util/auth.header";

// create AuthContext
export const AuthContext = React.createContext();

// Create the AuthProvider
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [employee, setEmployee] = useState({});

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, employee ,setEmployee};
  useEffect(() => {
    const fetchToken = async () => {
      const isEmployee = await employeeAuthHeader();
      if (isEmployee) {
        setIsLogged(true);
        setEmployee(isEmployee);
        if (isEmployee.employee_role === "admin") {
          setIsAdmin(true);
        }
      }
    };
  
    fetchToken();
  }, [setIsLogged, setEmployee, setIsAdmin]);
  

  // Log the updated state whenever the employee state changes
  useEffect(() => {
   // console.log(employee);
  }, [employee]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Export the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
