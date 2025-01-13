import React from "react";
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

const GSTReport = () => {
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
            GST Report
          </h2>

          {/* Report Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-600">
                GST Summary
              </h3>
              <p className="text-sm text-gray-500">Period: Jan 2025</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Export
            </button>
          </div>

          {/* GST Table */}
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">GST Type</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="py-2 px-4 border-b">GST on Sales</td>
                <td className="py-2 px-4 border-b text-right">$2,500</td>
                <td className="py-2 px-4 border-b text-right">5%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">GST on Purchases</td>
                <td className="py-2 px-4 border-b text-right">$1,500</td>
                <td className="py-2 px-4 border-b text-right">5%</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4 border-b font-semibold">
                  Net GST Payable
                </td>
                <td className="py-2 px-4 border-b text-right font-semibold">
                  $1,000
                </td>
                <td className="py-2 px-4 border-b"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default GSTReport;
