// "use client";

// import {
//   ChevronRight,
//   User,
//   Box,
//   FileText,
//   ClipboardList,
//   DollarSign,
//   BarChart,
//   Info,
// } from "lucide-react";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import {
//   SidebarGroup,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
// } from "@/components/ui/sidebar";
// import dashboardLogo from "../../assets/dashboard-logo.png";
// import { useNavigate } from "react-router-dom";

// export function NavMain({ items }) {
//   const categories = [
//     {
//       name: "Category",
//       icon: User,
//       subItems: ["Add Category", "Update Category"],
//     },
//     {
//       name: "Customer",
//       icon: User,
//       subItems: ["Add Customer", "Update Customer"],
//     },
//     {
//       name: "Products",
//       icon: Box,
//       subItems: ["Add Product", "Update Product"],
//     },
//     {
//       name: "Invoice",
//       icon: FileText,
//       subItems: ["Create Invoice", "View Invoices"],
//     },
//     {
//       name: "Inventory",
//       icon: ClipboardList,
//       subItems: ["Add Inventory", "Update Inventory"],
//     },
//     {
//       name: "Transactions",
//       icon: DollarSign,
//       subItems: ["View Transactions", "Export Transactions"],
//     },
//     {
//       name: "Reports",
//       icon: BarChart,
//       subItems: ["Sales Report", "Inventory Report"],
//     },
//     {
//       name: "Tax Information",
//       icon: Info,
//       subItems: ["Add Tax Info", "Update Tax Info"],
//     },
//   ];
//   const navigate = useNavigate();

//   const handleAddCategoryClick = () => {
//     // setAddCategoryOpen(true);
//     navigate("/dashboard/add-category");
//   };

//   return (
//     <SidebarGroup>
//       <img src={dashboardLogo} alt="Dashboard Logo" className="mb-4" />
//       <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mb-4">
//         Dashboard
//       </button>
//       <SidebarMenu>
//         {categories.map((category) => (
//           <Collapsible key={category.name}>
//             <CollapsibleTrigger asChild>
//               <SidebarMenuButton>
//                 <category.icon className="mr-2" />
//                 {category.name}
//                 <ChevronRight className="ml-auto transition-transform transform rotate-0 group-data-[state=open]:rotate-90" />
//               </SidebarMenuButton>
//             </CollapsibleTrigger>
//             <CollapsibleContent>
//               {category.subItems.map((subItem, index) => (
//                 <SidebarMenuItem key={index}>
//                   <SidebarMenuButton
//                     className="pl-8"
//                     onClick={
//                       subItem === "Add Category" ? handleAddCategoryClick : null
//                     }
//                   >
//                     {subItem}
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </CollapsibleContent>
//           </Collapsible>
//         ))}
//       </SidebarMenu>
//     </SidebarGroup>
//   );
// }
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
 

  const categories = [
    {
      name: "Category",
      icon: User,
      subItems: [
        { name: "Add Category", action: "addCategory" },
        { name: "Update Category", action: "updateCategory" },
      ],
    },
    {
      name: "Customer",
      icon: User,
      subItems: [
        { name: "Add Customer", action: "addCustomer" },
        { name: "Update Customer", action: "updateCustomer" },
      ],
    },
    {
      name: "Products",
      icon: Box,
      subItems: [
        { name: "Add Product", action: "addProduct" },
        { name: "Update Product", action: "updateProduct" },
      ],
    },
    {
      name: "Invoice",
      icon: FileText,
      subItems: [
        { name: "Create Invoice", action: "createInvoice" },
        { name: "View Invoices", action: "viewInvoices" },
      ],
    },
    {
      name: "Inventory",
      icon: ClipboardList,
      subItems: [
        { name: "Add Inventory", action: "addInventory" },
        { name: "Update Inventory", action: "updateInventory" },
      ],
    },
    {
      name: "Transactions",
      icon: DollarSign,
      subItems: [
        { name: "View Transactions", action: "viewTransactions" },
        { name: "Export Transactions", action: "exportTransactions" },
      ],
    },
    {
      name: "Reports",
      icon: BarChart,
      subItems: [
        { name: "Sales Report", action: "salesReport" },
        { name: "Inventory Report", action: "inventoryReport" },
      ],
    },
    {
      name: "Tax Information",
      icon: Info,
      subItems: [
        { name: "Add Tax Info", action: "addTaxInfo" },
        { name: "Update Tax Info", action: "updateTaxInfo" },
      ],
    },
  ];

  const navigate = useNavigate();

  const handleCategoryAction = (action) => {
    switch (action) {
      case "addCategory":
        navigate("/dashboard/add-category");
        break;
      case "addCustomer":
        navigate("/dashboard/add-customer");
        break;
      // Add cases for other actions like updateCategory, etc.
      default:
        break;
    }
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
                    onClick={() => handleCategoryAction(subItem.action)}
                  >
                    {subItem.name}
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

