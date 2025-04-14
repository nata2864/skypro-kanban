import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";
import { RoutesApp } from "./const.js";
import PopNewCardPage from "./pages/PopNewCardPage/PopNewCardPage.jsx";
import PopBrowsePage from "./pages/PopBrowsePage/PopBrowsePage.jsx";
import PopExitPage from "./pages/PopExitPage/PopExitPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

function AppRoutes() {
 

  return (
    <Routes>
      <Route element={<PrivateRoute  />}>
        <Route
          path={RoutesApp.MAIN}
          element={<MainPage />}
        >
          <Route path={RoutesApp.NEWCARD} element={<PopNewCardPage />} />
          <Route path={RoutesApp.BROWSE} element={<PopBrowsePage />} />
          <Route
            path={RoutesApp.EXIT}
            element={<PopExitPage  />}
          />
        </Route>
      </Route>
      <Route
        path={RoutesApp.SIGN_IN}
        element={<SignInPage  />}
      />
      <Route path={RoutesApp.SIGN_UP} element={<SignUpPage  />} />
      <Route path={RoutesApp.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
