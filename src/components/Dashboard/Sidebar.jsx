// "use client";
// import * as React from "react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarRail,
// } from "@/components/ui/sidebar";
// import { NavMain } from "./NavMain";


// import { LogOut, Menu } from "lucide-react";
// import { DropdownMenuItem,DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";




// export function AppSidebar(props) {
//   return (
//     <Sidebar collapsible="icon" {...props}>
//       <SidebarHeader></SidebarHeader>
//       <SidebarContent className="bg-black">
//         <NavMain />
//       </SidebarContent>
//       <SidebarFooter>
      
       
//       <button className="flex items-center p-2 text-white bg-gray-700 hover:bg-gray-600 rounded">
//           <LogOut className="mr-2" />
//           Log out
//         </button>
//       </SidebarFooter>
//       <SidebarRail />
//     </Sidebar>
//   );
// }

"use client"; // Ensure this is the first line to indicate client-side rendering

import * as React from "react";
import { useNavigate } from "react-router-dom"; // or useRouter from 'next/router' for Next.js
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
import { LogOut } from "lucide-react";

export function AppSidebar(props) {
  const navigate = useNavigate(); // For React Router, use useRouter() for Next.js

  const handleLogout = async () => {
    try {
      const response = await fetch("http://192.168.0.123:4500/api/v1/user/logout", {
        method: "GET",
      });
      const result = await response.json();
      console.log(result);
      localStorage.removeItem("userData");
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent className="bg-black">
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <button
          onClick={handleLogout}
          className="flex items-center p-2 text-white bg-gray-700 hover:bg-gray-600 rounded"
        >
          <LogOut className="mr-2" />
          Log out
        </button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

