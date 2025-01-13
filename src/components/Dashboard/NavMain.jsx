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
      subItems: ["Sales Report", "Inventory Report","GST Report","Profit & Loss Report"],
    },
    {
      name: "Tax Information",
      icon: Info,
      subItems: ["Add Tax Info", "Update Tax Info"],
    },
  ];
  const navigate = useNavigate();

  const handleAddCategoryClick = () => {
    // setAddCategoryOpen(true);
    navigate("/dashboard/add-category");
  };
  const handleCreateInvoice = () => {
    // setAddCategoryOpen(true);
    navigate("/dashboard/create-invoice");
  };

  const handleForm = (e) => {
    e.preventDefault();
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleEditCategoryClick = () => {
    navigate("/dashboard/all-category");
  };
  const handleSalesReport = () => {
    navigate("/dashboard/sales-reports");
  };
  const handleInventoryReport = () => {
    navigate("/dashboard/inventory-reports");
  };
  const handleGSTReport = () => {
    navigate("/dashboard/gst-reports");
  };
  const handlePLReport = () => {
    navigate("/dashboard/profit-loss-report");
  };
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
                      subItem === "Add Category"
                        ? handleAddCategoryClick
                        : subItem === "Update Category"
                        ? handleEditCategoryClick
                        : subItem === "Create Invoice"
                        ? handleCreateInvoice
                        : subItem === "Sales Report"
                        ? handleSalesReport
                        : subItem === "Inventory Report"
                        ? handleInventoryReport
                        : subItem === "GST Report"
                        ? handleGSTReport
                        : subItem === "Profit & Loss Report"
                        ? handlePLReport
                        : null
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
