import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Receipt } from "lucide-react";
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
import { Plus, Trash2 } from "lucide-react";

const CreateInvoice = () => {
  // const [invoice, setInvoice] = useState({
  //   invoice_id: "002",
  //   customer_id: "00001",
  //   invoice_number: 1,
  //   issue_date: "2025-01-07",
  //   due_date: "",
  //   total_amount: 670,
  //   status: "Unpaid",
  //   received: 222,
  // });

  // const [items, setItems] = useState([
  //   {
  //     item_id: "2",
  //     product_id: "2",
  //     item_name: "Salt",
  //     quantity: 10,
  //     description: "Product 2",
  //     unit_price: 67,
  //     total_price: 670,
  //   },
  // ]);

  // const sendData = async () => {
  //   const fullData = {
  //     invoice_id: invoice.invoice_id,
  //     customer_id: invoice.customer_id,
  //     invoice_number: invoice.invoice_number,
  //     status: "pending",
  //     items: [...items],
  //   };
  //   try {
  //     const res = await fetch(
  //       "http://127.0.0.1:5000/invoice/api/v1/createinvoice", // replace with your actual backend endpoint
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(fullData),
  //       }
  //     );
  //     const result = await res.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.log("Failed to send", error);
  //   }
  // };

  // const handleInvoiceChange = (e) => {
  //   setInvoice({ ...invoice, [e.target.name]: e.target.value });
  // };

  // const handleItemChange = (index, e) => {
  //   const updatedItems = [...items];
  //   updatedItems[index][e.target.name] = e.target.value;

  //   // Recalculate total_price for the item
  //   if (e.target.name === "quantity" || e.target.name === "unit_price") {
  //     updatedItems[index].total_price =
  //       (updatedItems[index].quantity || 0) *
  //       (updatedItems[index].unit_price || 0);
  //   }

  //   setItems(updatedItems);

  //   // Recalculate total invoice amount
  //   const totalAmount = updatedItems.reduce(
  //     (sum, item) => sum + item.total_price,
  //     0
  //   );

  //   setInvoice({ ...invoice, total_amount: totalAmount });
  // };

  // const deleteItem = (index) => {
  //   const updatedItems = items.filter((_, itemIndex) => itemIndex !== index);
  //   setItems(updatedItems);

  //   // Update the invoice total amount
  //   const totalAmount = updatedItems.reduce(
  //     (sum, item) => sum + item.total_price,
  //     0
  //   );
  //   setInvoice({ ...invoice, total_amount: totalAmount });
  // };

  // const addNewItem = () => {
  //   const newItem = {
  //     item_id: items.length + 1,
  //     product_id: items.length + 1,
  //     item_name: "",
  //     quantity: 0,
  //     unit_price: 0,
  //     total_price: 0,
  //   };
  //   setItems([...items, newItem]);
  // };
  // const [userDetails, setUserDetails] = useState({});
  // const getCustomer = async () => {
  //   try {
  //     const res = await fetch(
  //       "http://192.168.0.144:3000/api/customers/details-customer/677cc397cb758490b836a0eb",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const result = await res.json();
  //     console.log(result);
  //     setUserDetails(result.customer);
  //   } catch (error) {
  //     console.log("Failed to get customer", error);
  //   }
  // };
  // console.log(userDetails);

  // useEffect(() => {
  //   getCustomer();
  // }, []);
  const [invoice, setInvoice] = useState({
    invoiceNumber: "",
    date: "2024-12-17 01:52 PM",
    status: "NOT PAID",
    recipient: {
      name: "Jacob Elijah",
      email: "jacobelijah122@gmail.com",
    },
    items: [
      {
        orderId: "36882",
        date: "2024-12-17 01:51 PM",
        details: "Guest Post on Dimensionscopez.com",
        link: "https://dimensionscopez.com/audi-a4-a-perfect-blend-of-luxury-and-performance/",
        price: 50.0,
        discount: 0,
      },
    ],
  });

  const getCustomer = async () => {
    try {
      const res = await fetch(
        "http://192.168.0.144:3000/api/customers/details-customer/677cc397cb758490b836a0eb",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await res.json();
      console.log(result);
      setInvoice((prev) => {
        return {
          ...prev,
          recipient: {
            name: result.customer.first_name + " " + result.customer.last_name,
            email: result.customer.email,
          },
        };
      });
    } catch (error) {
      console.log("Failed to get customer", error);
    }
  };
  // console.log(userDetails);

  useEffect(() => {
    getCustomer();
    const num = randomNumber()
    setInvoice((prev) => ({
     ...prev,
      invoiceNumber: `${num}`,
    }));
  }, []);

  const calculateSubTotal = () =>
    invoice.items.reduce((sum, item) => sum + Number(item.price), 0);
  const calculateTotalDiscount = () =>
    invoice.items.reduce((sum, item) => sum + Number(item.discount), 0);
  const calculateGrandTotal = () =>
    calculateSubTotal() - calculateTotalDiscount();

  const updateRecipient = (field, value) => {
    setInvoice((prev) => ({
      ...prev,
      recipient: {
        ...prev.recipient,
        [field]: value,
      },
    }));
  };

  const updateInvoiceField = (field, value, e) => {
    e.preventDefault();
    console.log(value);
    
    setInvoice((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateItem = (index, field, value) => {
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addNewItem = () => {
    setInvoice((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          orderId: "",
          date: new Date().toLocaleString(),
          details: "",
          link: "",
          price: 0,
          discount: 0,
        },
      ],
    }));
  };

  const randomNumber = () => {
    let result = "INV";
    const num = Math.floor(Math.random() * 10000000);
    return (result += num);
  };

  const removeItem = (index) => {
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const navigate = useNavigate();

  return (
    <>
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
          <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-6 max-w-[2000px] mx-auto">
              {/* Form Section */}
              <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden min-w-0">
                <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 h-3" />
                <div className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                    Invoice Details
                  </h2>

                  {/* Invoice Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Invoice Number
                      </label>
                      <input
                        disabled
                        type="text"
                        value={invoice.invoiceNumber.toString()}
                        onChange={(e) =>
                          updateInvoiceField("invoiceNumber", e.target.value, e)
                        }
                        className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        value={invoice.date} // Ensure the correct format
                        onChange={(e) =>
                          updateInvoiceField(
                            "date",
                            e.target.value,e // Save in a standard format
                          )
                        }
                        className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Recipient Name
                      </label>
                      <input
                        type="text"
                        value={invoice.recipient.name}
                        onChange={(e) =>
                          updateRecipient("name", e.target.value, e)
                        }
                        className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Recipient Email
                      </label>
                      <input
                        type="email"
                        value={invoice.recipient.email}
                        onChange={(e) =>
                          updateRecipient("email", e.target.value)
                        }
                        className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  {/* Items */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Invoice Items
                      </h3>
                      <button
                        onClick={addNewItem}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        <span className="hidden sm:inline">Add Item</span>
                      </button>
                    </div>

                    {invoice.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg mb-4"
                      >
                        <div className="grid grid-cols-1 gap-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Order ID
                              </label>
                              <input
                                type="text"
                                value={item.orderId}
                                onChange={(e) =>
                                  updateItem(index, "orderId", e.target.value)
                                }
                                className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date
                              </label>
                              <input
                                type="date"
                                value={item.date}
                                onChange={(e) =>
                                  updateItem(
                                    index,
                                    "date",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Details
                            </label>
                            <textarea
                              value={item.details}
                              onChange={(e) =>
                                updateItem(index, "details", e.target.value)
                              }
                              rows={4}
                              className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500 resize-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Link
                            </label>
                            <input
                              type="text"
                              value={item.link}
                              onChange={(e) =>
                                updateItem(index, "link", e.target.value)
                              }
                              className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price
                              </label>
                              <input
                                type="number"
                                value={item.price}
                                onChange={(e) =>
                                  updateItem(
                                    index,
                                    "price",
                                    parseFloat(e.target.value) || 0
                                  )
                                }
                                className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Discount
                              </label>
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  value={item.discount}
                                  onChange={(e) =>
                                    updateItem(
                                      index,
                                      "discount",
                                      parseFloat(e.target.value) || 0
                                    )
                                  }
                                  className="flex-1 px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                                />
                                <button
                                  onClick={() => removeItem(index)}
                                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Invoice Preview */}
              <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden min-w-0">
                <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 h-3" />
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Invoice Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                        Invoice To:
                      </h2>
                      <h3 className="text-lg sm:text-xl text-gray-700">
                        {invoice.recipient.name}
                      </h3>
                      <p className="text-gray-600">{invoice.recipient.email}</p>
                    </div>
                    <div className="sm:text-right">
                      <div className="flex items-center sm:justify-end gap-2 mb-2">
                        <Receipt className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                          INVOICE
                        </h1>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-600">
                          Invoice#{" "}
                          <span className="font-semibold">
                            {invoice.invoiceNumber}
                          </span>
                        </p>
                        <p className="text-gray-600">
                          Date{" "}
                          <span className="font-semibold">{invoice.date}</span>
                        </p>
                        <p className="text-gray-600">
                          Payment Status
                          <span className="ml-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {invoice.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Invoice Table */}
                  <div className="border rounded-lg overflow-hidden mb-8 overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">
                            ORDER
                          </th>
                          <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">
                            DETAILS
                          </th>
                          <th className="px-4 sm:px-6 py-3 text-right text-xs sm:text-sm font-semibold text-gray-600">
                            PRICE
                          </th>
                          <th className="px-4 sm:px-6 py-3 text-right text-xs sm:text-sm font-semibold text-gray-600">
                            DISCOUNT
                          </th>
                          <th className="px-4 sm:px-6 py-3 text-right text-xs sm:text-sm font-semibold text-gray-600">
                            TOTAL
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {invoice.items.map((item, index) => (
                          <tr key={index}>
                            <td className="px-4 sm:px-6 py-4">
                              <p className="text-xs sm:text-sm text-gray-900">
                                Order ID: {item.orderId}
                              </p>
                              <p className="text-xs sm:text-sm text-gray-500">
                                Date: {item.date}
                              </p>
                            </td>
                            <td className="px-4 sm:px-6 py-4">
                              <p className="text-xs sm:text-sm text-gray-900 whitespace-pre-wrap">
                                {item.details}
                              </p>
                              <a
                                href={item.link}
                                className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 break-all"
                              >
                                {item.link}
                              </a>
                            </td>
                            <td className="px-4 sm:px-6 py-4 text-right text-xs sm:text-sm text-gray-900">
                              ${item.price.toFixed(2)}
                            </td>
                            <td className="px-4 sm:px-6 py-4 text-right text-xs sm:text-sm text-gray-900">
                              ${item.discount.toFixed(2)}
                            </td>
                            <td className="px-4 sm:px-6 py-4 text-right text-xs sm:text-sm text-gray-900">
                              ${(item.price - item.discount).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Invoice Summary */}
                  <div className="flex justify-end">
                    <div className="w-full sm:w-80">
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm sm:text-base text-gray-600">
                          <span>Sub Total</span>
                          <span>${calculateSubTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base text-gray-600">
                          <span>Discount</span>
                          <span>${calculateTotalDiscount().toFixed(2)}</span>
                        </div>
                        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 p-4 rounded-lg">
                          <div className="flex justify-between text-white font-semibold text-sm sm:text-base">
                            <span>Grand Total</span>
                            <span>${calculateGrandTotal().toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default CreateInvoice;
