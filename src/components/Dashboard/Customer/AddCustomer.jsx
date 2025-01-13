

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//     SidebarInset,
//     SidebarProvider,
//     SidebarTrigger,
// } from "@/components/ui/sidebar";
// import { Separator } from "@/components/ui/separator";
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { AppSidebar } from '../Sidebar';

// const AddCustomer = () => {
//     const navigate = useNavigate();
//     const [form, setForm] = useState({
//         first_name: "",
//         last_name: "",
//         email: "",
//         phone_number: "",
//         address: "",
//         invoice_prefix:""
//     });

//     const handleForm = (e) => {
//         e.preventDefault();
//         setForm((prev) => {
//             return { ...prev, [e.target.name]: e.target.value };
//         });
//     };

//     const sendData = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch('http://192.168.0.144:3000/api/customers/add-customer', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(form),
//             });
//             const data = await res.json();
//             console.log(data);
//             if (res.ok) {
//                 navigate("/dashboard");
//             } else {
//                 console.error('Failed to add customer:', data.error);
//             }
//         } catch (error) {
//             console.log(error.message);
//         }
//     };

//     return (
//         <>
//             <SidebarProvider>
//                 <AppSidebar />
//                 <SidebarInset>
//                     <header className="flex h-16 items-center gap-2 px-4">
//                         <SidebarTrigger className="-ml-1" />
//                         <Separator orientation="vertical" className="h-4 mr-2" />
//                         <Breadcrumb>
//                             <BreadcrumbList>
//                                 <BreadcrumbItem className="hidden md:block">
//                                     <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
//                                 </BreadcrumbItem>
//                                 <BreadcrumbSeparator className="hidden md:block" />
//                                 <BreadcrumbItem>
//                                     <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//                                 </BreadcrumbItem>
//                             </BreadcrumbList>
//                         </Breadcrumb>
//                     </header>
//                     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                         <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
//                             <h2 className="text-2xl font-bold text-center mb-6">
//                                 Add New Customer
//                             </h2>
//                             <form onSubmit={sendData}>
//                                 {/* First Name */}
//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         First Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         onChange={handleForm}
//                                         value={form.first_name}
//                                         name="first_name"
//                                         className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                     />
//                                 </div>

//                                 {/* Last Name */}
//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Last Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         onChange={handleForm}
//                                         value={form.last_name}
//                                         name="last_name"
//                                         className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                     />
//                                 </div>

//                                 {/* Email */}
//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Email
//                                     </label>
//                                     <input
//                                         type="email"
//                                         onChange={handleForm}
//                                         value={form.email}
//                                         name="email"
//                                         className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                     />
//                                 </div>
//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Invoice Prefix
//                                     </label>
//                                     <input
//                                         type="text"
//                                         onChange={handleForm}
//                                         value={form.invoice_prefix}
//                                         name="invoice_prefix"
//                                         className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                     />
//                                 </div>

//                                 {/* Phone Number */}
//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Phone Number
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         onChange={handleForm}
//                                         value={form.phone_number}
//                                         name="phone_number"
//                                         className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                     />
//                                 </div>

//                                 {/* Address */}
//                                 <div className="mb-6">
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                                         Address
//                                     </label>
//                                     <textarea
//                                         onChange={handleForm}
//                                         value={form.address}
//                                         name="address"
//                                         className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                         rows="4"
//                                     />
//                                 </div>

//                                 {/* Action Buttons */}
//                                 <div className="flex justify-center gap-4">
//                                     <button
//                                         type="submit"
//                                         className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none"
//                                     >
//                                         Save
//                                     </button>
//                                     <button
//                                         type="button"
//                                         className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 focus:outline-none"
//                                         onClick={() => navigate(-1)}
//                                     >
//                                         Cancel
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </SidebarInset>
//             </SidebarProvider>
//         </>
//     );
// };

// export default AddCustomer;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { AppSidebar } from '../Sidebar';

const AddCustomer = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address: "",
        invoice_prefix: ""
    });

    const handleForm = (e) => {
        e.preventDefault();
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const sendData = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://192.168.0.144:3000/api/customers/add-customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            console.log(data);
            if (res.ok) {
                navigate("/dashboard");
            } else {
                console.error('Failed to add customer:', data.error);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

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

                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add New Customer</h2>
                        <form onSubmit={sendData}>
                            {/* First Name */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    onChange={handleForm}
                                    value={form.first_name}
                                    name="first_name"
                                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    onChange={handleForm}
                                    value={form.last_name}
                                    name="last_name"
                                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    onChange={handleForm}
                                    value={form.email}
                                    name="email"
                                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>

                            {/* Invoice Prefix */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Invoice Prefix
                                </label>
                                <input
                                    type="text"
                                    onChange={handleForm}
                                    value={form.invoice_prefix}
                                    name="invoice_prefix"
                                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    onChange={handleForm}
                                    value={form.phone_number}
                                    name="phone_number"
                                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>

                            {/* Address */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Address
                                </label>
                                <textarea
                                    onChange={handleForm}
                                    value={form.address}
                                    name="address"
                                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    rows="4"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-between gap-6 mt-8">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 focus:outline-none"
                                    onClick={() => navigate(-1)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default AddCustomer;
