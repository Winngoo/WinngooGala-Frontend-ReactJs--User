import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main/Main";
import About from "./pages/about/About";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Contact from "./pages/contact/Contact";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import Events from "./pages/allEvents/Events";
import CustomEvent from "./pages/customEvent/CustomEvent";
import Pricing from "./pages/bookings/Booking";
import Blog from "./pages/portfolio/Blog";
import EmailSend from "./pages/auth/forgot/EmailSend";
import ResetPassword from "./pages/auth/forgot/ResetPassword";
import SecretPage from "./router/SecretPage";
import Homepage from "./zego/Homepage/Homepage";
import Room from "./zego/Room/Room";
import PrivateRouter from "./router/PrivateRoute";
import WinngooGalaDashboard from "./pages/dashboard/Home/DashboardHome";
import DashSettings from "./pages/dashboard/DashSettings/DashSettings";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/create-your-event",
        element: (
          <PrivateRouter>
            <CustomEvent />
          </PrivateRouter>
        ),
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: (
          <SecretPage>
            <Login />
          </SecretPage>
        ),
      },
      {
        path: "/register",
        element: (
          <SecretPage>
            <Register />
          </SecretPage>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <SecretPage>
            <EmailSend />
          </SecretPage>
        ),
      },
      {
        path: "/reset-password",
        element: (
          <SecretPage>
            <ResetPassword />
          </SecretPage>
        ),
      },
      {
        path: "/dashboard",
        element: <WinngooGalaDashboard />,
      },
      {
        path: "/settings",
        element: <DashSettings />,
      },
    ],
  },
  {
    path: "/celebration/:id",
    element: (
      <PrivateRouter>
        <Homepage />
      </PrivateRouter>
    ),
  },
  {
    path: "/celebration/:id/room/:roomId",
    element: (
      <PrivateRouter>
        <Room />
      </PrivateRouter>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
