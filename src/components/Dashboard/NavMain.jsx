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
} from "lucide-react"; 
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
import { useNavigate } from "react-router-dom";

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
  const navigate=useNavigate()

  const handleAddCategoryClick = () => {
    // setAddCategoryOpen(true);
navigate("/dashboard/add-category")
  };

  const handleForm = (e) => {
    e.preventDefault();
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

  };


  const sendData = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://192.168.0.156:8080/category/add`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      console.log(res);
      const data=await res.json();
      console.log(data);
      
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
               
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </SidebarMenu>

     
     
    </SidebarGroup>
  );
}
