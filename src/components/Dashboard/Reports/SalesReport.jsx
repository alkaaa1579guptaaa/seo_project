import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AppSidebar } from "../Sidebar";

const SalesReport = () => {
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
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sales Report
          </h2>

          {/* Report Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-600">
                Sales Overview
              </h3>
              <p className="text-sm text-gray-500">Period: Jan 2025</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Export
            </button>
          </div>

          {/* Sales Table */}
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Product</th>
                <th className="py-2 px-4 border-b">Quantity Sold</th>
                <th className="py-2 px-4 border-b">Total Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="py-2 px-4 border-b">Product A</td>
                <td className="py-2 px-4 border-b text-center">120</td>
                <td className="py-2 px-4 border-b text-right">$12,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">Product B</td>
                <td className="py-2 px-4 border-b text-center">80</td>
                <td className="py-2 px-4 border-b text-right">$8,000</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4 border-b font-semibold">
                  Total Sales
                </td>
                <td className="py-2 px-4 border-b"></td>
                <td className="py-2 px-4 border-b text-right font-semibold">
                  $20,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SalesReport;