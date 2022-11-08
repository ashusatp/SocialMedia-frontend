import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Profile from "./Pages/profile/Profile";
import Home from "./Pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import "./style.scss";
import { useContext} from "react";
import { DarkModeContext } from "./context/DarkModeContextProvider";
import { AuthContext } from "./context/AuthContextProvider";

function App() {
  const  {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext);


  const Layout = () => {
    return (
      <div className={darkMode? 'dark-theme': 'light-theme'}>
        <NavBar/>
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProctectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProctectedRoute>
          <Layout />
        </ProctectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
