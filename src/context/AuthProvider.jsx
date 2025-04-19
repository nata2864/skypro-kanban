import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "../utils";

export function AuthProvider({ children }){
    const [user, setUser] = useState(checkLs());

    useEffect(() => {
        const storedUser = checkLs();
        if (storedUser) {
          setUser(storedUser);
        }
      }, []);

      const updateUserInfo = (userData) => {
        setUser(userData);
        if (userData) {
           localStorage.setItem("userInfo", JSON.stringify(userData));
        } else {
           localStorage.removeItem("userInfo");
        }
     };

      const login = (loginData) => {
        updateUserInfo(loginData);
        return true;
     };
  
     const logout = () => {
        updateUserInfo(null);
        return true;
     };

     return (
        <AuthContext.Provider value={{ user, login, logout, updateUserInfo }}>
           {children}
        </AuthContext.Provider>
     );
}



