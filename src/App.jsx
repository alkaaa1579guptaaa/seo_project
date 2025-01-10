import React from "react";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  const location=useLocation();

  //check if the current route is dashboard
  const isDashboard=location.pathname.startsWith("/dashboard")

  return (
    <div>
      {!isDashboard && <Header />}
       <main>
        <Outlet />
      </main>
      {!isDashboard && <Footer /> }
    </div>
  );
};

export default App;
