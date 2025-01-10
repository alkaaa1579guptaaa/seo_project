import Header from "@/components/Header/Header";
import React from "react";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
     
      <Header/>

      {/* Main Content */}
      <main className="flex-grow mt-16"> 
        {children}
      </main>

 
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
