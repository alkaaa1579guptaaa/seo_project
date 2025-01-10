"use client";

import { useState } from "react";
import {
  ChevronRight,
  User,
  Box,
  FileText,
  ClipboardList,
  DollarSign,
  BarChart,
  Info,
} from "lucide-react"; // Import necessary icons
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import dashboardLogo from "../../assets/dashboard-logo.png";

export function NavMain({ items }) {
  const [isAddCategoryOpen, setAddCategoryOpen] = useState(false);
  const [isCreateInvoiceOpen, setCreateInvoiceOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    createdDate: "",
  });

  const categories = [
    {
      name: "Category",
      icon: User,
      subItems: ["Add Category", "Update Category"],
    },
    {
      name: "Customer",
      icon: User,
      subItems: ["Add Customer", "Update Customer"],
    },
    {
      name: "Products",
      icon: Box,
      subItems: ["Add Product", "Update Product"],
    },
    {
      name: "Invoice",
      icon: FileText,
      subItems: ["Create Invoice", "View Invoices"],
    },
    {
      name: "Inventory",
      icon: ClipboardList,
      subItems: ["Add Inventory", "Update Inventory"],
    },
    {
      name: "Transactions",
      icon: DollarSign,
      subItems: ["View Transactions", "Export Transactions"],
    },
    {
      name: "Reports",
      icon: BarChart,
      subItems: ["Sales Report", "Inventory Report"],
    },
    {
      name: "Tax Information",
      icon: Info,
      subItems: ["Add Tax Info", "Update Tax Info"],
    },
  ];

  const handleAddCategoryClick = () => {
    setAddCategoryOpen(true);
  };
  // const handleCreateInvoiceClick = () => {
  //   setCreateInvoiceOpen(true);
  // };

  const handleForm = (e) => {
    e.preventDefault();
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

  };


  const sendData = async() => {
    try {
      const res = await fetch(`http://192.168.0.156:8080/category/add`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      console.log(res);
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
  return (
    <SidebarGroup>
      <img src={dashboardLogo} alt="Dashboard Logo" className="mb-4" />
      <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mb-4">
        Dashboard
      </button>
      <SidebarMenu>
        {categories.map((category) => (
          <Collapsible key={category.name}>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton>
                <category.icon className="mr-2" />
                {category.name}
                <ChevronRight className="ml-auto transition-transform transform rotate-0 group-data-[state=open]:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {category.subItems.map((subItem, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    className="pl-8"
                    onClick={
                      subItem === "Add Category" ? handleAddCategoryClick : null
                    }
                  >
                    {subItem}
                    {/* <SidebarMenuButton
                    className="pl-8"
                    onClick={
                      subItem === "Add Category"
                        ? handleAddCategoryClick
                        : subItem === "Create Invoice"
                        ? handleCreateInvoiceClick
                        : null
                    }
                  >
                    {subItem} */}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </SidebarMenu>

      {isAddCategoryOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
            <h2 className="text-2xl font-bold text-center mb-6">
              Add New Category
            </h2>
            <form>
              <div className="mb-6">
                <label className="block text-sm font-medium  text-gray-700 mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  onChange={handleForm}
                  value={form.name}
                  name="name"
                  className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  onChange={handleForm}
                  value={form.description}
                  name="description"
                  className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="6"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Created Date
                </label>
                <input
                  type="date"
                  value={form.createdDate}
                  onChange={handleForm}
                  name="createdDate"
                  className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  onClick={async() => await sendData()}
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 focus:outline-none"
                  onClick={() => setAddCategoryOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isCreateInvoiceOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Create Invoice</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Invoice Number
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Customer Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-4"
                onClick={() => setCreateInvoiceOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </SidebarGroup>
  );
}
