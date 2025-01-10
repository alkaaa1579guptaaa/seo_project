import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ServiceDropdown1 from "@/pages/ServiceDropdown1";
import LandingPage from "@/pages/LandingPage";
import ServiceDropdown2 from "@/pages/ServiceDropdown2";
import ServiceDropdown3 from "@/pages/ServiceDropdown3";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import LogoutPage from "@/pages/LogoutPage";
import AddCategory from "@/components/Dashboard/Category/AddCategory";
import GetAllCategory from "@/components/Dashboard/Category/GetAllCategory";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //   Home route
      { path: "", element: <LandingPage /> },

      // Services

      {
        path: "services/SEO-services",
        element: <ServiceDropdown1 />,
      },
      {
        path: "services/link-insert",
        element: <ServiceDropdown2 />,
      },
      {
        path: "services/guest-posting",
        element: <ServiceDropdown3 />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path:"login",
        element:<LoginPage/>
      },
      {
        path:"register",
        element:<RegisterPage/>
      },
      {
        path:"logout",
        element:<LogoutPage/>
      },
      {
        path:"dashboard/add-category",
        element:<AddCategory/>
      },
      {
        path:"dashboard/all-category",
        element:<GetAllCategory/>
      }
    ],
  },
]);

export default router;
