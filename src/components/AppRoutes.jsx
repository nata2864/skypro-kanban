import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "../pages/MainPage/MainPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import { RoutesApp } from "../const";
import PopNewCardPage from "../pages/PopNewCardPage";
import PopBrowsePage from "../pages/PopBrowsePage";
import PopExitPage from "../pages/PopExitPage";

function AppRoutes() {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });
  
   return (
         <Routes> 
            <Route path={RoutesApp.MAIN} element={<MainPage loading={loading} />}>
        <Route path={RoutesApp.NEWCARD} element={<PopNewCardPage />} />
        <Route path={RoutesApp.BROWSE} element={<PopBrowsePage />} />
        <Route path={RoutesApp.EXIT} element={<PopExitPage />} /> 
      </Route>
            <Route path={RoutesApp.SIGN_IN} element={<SignInPage  />} />       
            <Route path={RoutesApp.SIGN_UP} element={<SignUpPage />} />
         </Routes>
      
   );
}

export default AppRoutes;