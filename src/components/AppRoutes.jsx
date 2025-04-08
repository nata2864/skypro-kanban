import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainPage from "../pages/MainPage/MainPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import { RoutesApp } from "../const";
import PopNewCardPage from "../pages/PopNewCardPage/PopNewCardPage.jsx";
import PopBrowsePage from "../pages/PopBrowsePage/PopBrowsePage.jsx";
import PopExitPage from "../pages/PopExitPage/PopExitPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path={RoutesApp.MAIN}
          element={<MainPage setIsAuth={setIsAuth} />}
        >
          <Route path={RoutesApp.NEWCARD} element={<PopNewCardPage />} />
          <Route path={RoutesApp.BROWSE} element={<PopBrowsePage />} />
          <Route
            path={RoutesApp.EXIT}
            element={<PopExitPage setIsAuth={setIsAuth} />}
          />
        </Route>
      </Route>
      <Route
        path={RoutesApp.SIGN_IN}
        element={<SignInPage setIsAuth={setIsAuth} />}
      />
      <Route path={RoutesApp.SIGN_UP} element={<SignUpPage />} />
      <Route path={RoutesApp.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
