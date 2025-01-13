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
import PrivacyPolicy from "@/components/Policy/PrivacyPolicy";
import RefundPolicy from "@/components/Policy/RefundPolicy";
import DeliveryPolicy from "@/components/Policy/DeliveryPolicy";
import AddCustomer from "@/components/Dashboard/Customer/AddCustomer";


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
         //Policy
         {
          path: "policy/privacy-policy",
          element: <PrivacyPolicy />
        },
        {
          path: "policy/refund-policy",
          element: <RefundPolicy />
        },
        {
          path: "policy/delivery-policy",
          element: <DeliveryPolicy />
        },
        {
          path:"dashboard/add-customer",
          element:<AddCustomer/>
        }
    ],
  },
]);

export default router;
