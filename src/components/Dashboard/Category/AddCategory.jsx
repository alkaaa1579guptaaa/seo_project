import { useState } from "react";
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



const AddCategory=()=>{
    const navigate=useNavigate()
    const [isAddCategoryOpen, setAddCategoryOpen] = useState(false);
    const [form, setForm] = useState({
        name: "",
        description: "",
        createdDate: "",
      });
    
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
      navigate("/dashboard/all-category")
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
    return (<>
     <SidebarProvider>
      <AppSidebar/>
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl font-bold text-center mb-6">
            Add New Category
          </h2>
          <form onSubmit={sendData}>
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
                
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 focus:outline-none"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      </SidebarInset>
      </SidebarProvider>
    
    </>
    )
}

export default AddCategory








