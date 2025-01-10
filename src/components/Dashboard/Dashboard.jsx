

// import React from "react";

// import { Progress } from "@/components/ui/progress";
// import { AppSidebar } from "./Sidebar";
// import Revenue from "./Revenue";

// import RadialChart from "./RadialChart";
// import BarChartComponent from "./BarChart";
// import RadialChartStacked from "./RadialChart-Stacked";


// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"


// export default function Dashboard() {
//     const totalRevenue = 125000; // Example data
//   const growthPercentage = 5.4; // Example data
//   return (
//     <SidebarProvider>
//       <AppSidebar  />
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
//           <div className="flex items-center gap-2 px-4">
//             <SidebarTrigger className="-ml-1" />
//             <Separator orientation="vertical" className="mr-2 h-4" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="#">
//                     Building Your Application
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//           <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//             <div className="aspect-video rounded-xl bg-muted/50" />
//           </div>
//           <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
//         </div>
//       </SidebarInset>
//       <div className="flex-1 flex flex-col">
//            <header className="bg-white shadow p-4">
//           <div className="flex justify-between items-center">
//               <h1 className="text-xl font-semibold">Dashboard</h1>
//               <div className="flex items-center space-x-4">
//                  <input
//                   type="text"
//                   placeholder="Search.."
//                   className="border rounded px-3 py-2"
//                 />
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </header>

//           <main className="flex-1 bg-gray-100 p-4">
//             <SidebarTrigger />
//             <div className="grid grid-cols-3 gap-4">
//               {/* First Column */}
//               <div className="grid grid-rows-4 gap-4">
//                 <div className="bg-white p-4 rounded inline-block">
//                   <h2 className="font-bold text-lg">Total Clients</h2>
//                   <Progress value={33} />
//                 </div>
//                 <div className="bg-white p-4 rounded inline-block">
//                   <h2 className="font-bold text-lg">Total Clients</h2>
//                   <Progress value={33} />
//                 </div>
//                 <div className="bg-white p-4 rounded inline-block">
//                   <h2 className="font-bold text-lg">Total Projects</h2>
//                   <Revenue
//                     totalRevenue={totalRevenue}
//                     growthPercentage={growthPercentage}
//                   />
//                 </div>
//                 <div className="bg-white p-4 rounded inline-block">
//                   <h2 className="font-bold text-lg">Notifications</h2>
//                   <BarChartComponent />
//                 </div>
//               </div>

//               {/* Second Column */}
//               <div className="grid grid-rows-2 gap-4">
//                 <div className="bg-white p-4 rounded inline-block">
//                   <h2 className="font-bold text-lg">Notifications</h2>
//                   <RadialChart />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-white p-4 rounded inline-block">
//                     <h2 className="font-bold text-lg">Notifications</h2>
//                     <RadialChartStacked />
//                   </div>
//                   <div className="bg-white p-4 rounded inline-block">
//                     <h2 className="font-bold text-lg">Notifications</h2>
//                     <RadialChart />
//                   </div>
//                 </div>
//               </div>

//               {/* Third Column */}
//               <div className="bg-white p-4 rounded row-span-2 inline-block">
//                 <h2 className="font-bold text-lg">Notifications</h2>
//               </div>
//             </div>
//           </main>
//         </div>
//     </SidebarProvider>

//   )
// }

"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import { AppSidebar } from "./Sidebar";
import Revenue from "./Revenue";
import RadialChart from "./RadialChart";
import BarChartComponent from "./BarChart";
import RadialChartStacked from "./RadialChart-Stacked";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TableComponent } from "./Table";

export default function Dashboard() {
  const totalRevenue = 125000; // Example data
  const growthPercentage = 5.4; // Example data

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4 mr-2" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
    
  <div className="flex-1 flex flex-col p-4 border">
  <main className="flex-1 bg-gray-100">
    <div className="grid grid-cols-3 gap-4">
      {/* First Column */}
      <div className="flex flex-col gap-4">
        <div className="bg-white p-4 rounded h-[100px]">
          <h2 className="font-bold text-lg">Total Clients</h2>
          <Progress value={33} />
        </div>
        <div className="bg-white p-4 rounded h-[100px]">
          <h2 className="font-bold text-lg">Total Clients</h2>
          <Progress value={33} />
        </div>
        <div className="bg-white p-4 rounded h-[100px]">
          <h2 className="font-bold text-lg">Total Clients</h2>
          <Progress value={33} />
        </div>
        <div className="bg-white p-4 rounded h-[100px]">
          <h2 className="font-bold text-lg">Total Clients</h2>
          <Progress value={33} />
        </div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-4">
        <div className="bg-white p-4 rounded ">
          {/* <h2 className="font-bold text-lg">Notifications</h2> */}
          <RadialChart />
        </div>
        <div className="bg-white p-4 rounded ">
          {/* <h2 className="font-bold text-lg">Notifications</h2> */}
          <RadialChartStacked />
        </div>
        {/* <div className="bg-white p-4 rounded ">
          <h2 className="font-bold text-lg">Notifications</h2>
          <RadialChart />
        </div>
        <div className="bg-white p-4 rounded ">
          <h2 className="font-bold text-lg">Notifications</h2>
          <RadialChart />
        </div> */}
      </div>

      {/* Third Column */}
      <div className="flex flex-col gap-4">
        <div className="bg-white p-4 rounded h-[100px]">
          <h2 className="font-bold text-lg">Notifications</h2>
        </div>
        <div className="bg-white p-4 rounded h-[100px]">
          <h2 className="font-bold text-lg">Notifications</h2>
        </div>
        <div className="bg-white p-4 rounded h-[100px]">
          <h2 className="font-bold text-lg">Notifications</h2>
        </div>
        <div className="bg-white p-4 rounded h-[100px]">
          <h2 className="font-bold text-lg">Notifications</h2>
        </div>
      </div>
    </div>
  </main>
</div>
<TableComponent/>
      </SidebarInset>
    </SidebarProvider>
  );
}



