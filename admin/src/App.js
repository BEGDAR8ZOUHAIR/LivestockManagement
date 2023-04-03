import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import Single from "./components/single/Single";
import New from "./screens/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { carInputs, compteInputs, productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./screens/profile/Profile";
import User from "./screens/single user/User";
import Users from "./screens/all users/Users";
import Cars from "./screens/cars/Cars";
import Comptes from "./screens/comptes/Comptes";
import Compte from "./screens/single compte/Compte";


function App()
{
  const { darkMode } = useContext(DarkModeContext);
  const token = localStorage.getItem("accessToken");

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
        {token ? (
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="users">
                <Route index element={<Users />} />
                <Route path="single" element={<User />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>

              <Route path="comptes">
                <Route index element={<Comptes />} />
                <Route
                  path="single"
                  element={<Compte inputs={compteInputs} title="Compte details" />}
                />
              </Route>
            </Route>
          </Routes>
        ) : (
          window.location.pathname !== "/login" && <Login />
        )}
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
