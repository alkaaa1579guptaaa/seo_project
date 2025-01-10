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
    
 
{/* <TableComponent/> */}
      </SidebarInset>
    </SidebarProvider>
  );
}



