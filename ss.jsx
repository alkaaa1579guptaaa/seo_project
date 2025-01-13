<div className="min-h-screen bg-gray-50 p-6">
<div className="grid grid-cols-2 gap-6">
  {/* Left Panel */}
  <div className="bg-white shadow-md rounded-lg p-6">
    <h1 className="text-lg font-semibold mb-4">
      Enter details to make your first Sale 🚀
    </h1>
    <p className="text-sm text-gray-500 mb-6">
      First sale is made in less than a minute on Vyapar
    </p>
    
    {/* Invoice Details */}
    <div className="mb-6">
      <h2 className="font-semibold">Invoice Details:</h2>
      <div className="mt-2">
        <div className="flex justify-between">
          <span>Invoice Number: </span>
          <span>#01</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Invoice Date:</span>
          <span>07-01-2025</span>
        </div>
      </div>
    </div>

    {/* Bill To */}
    <div className="mb-6">
      <h2 className="font-semibold">Bill To:</h2>
      <input
        type="text"
        placeholder="Customer Name"
        className="w-full mt-2 p-2 border border-gray-300 rounded"
        value="Arnab"
      />
    </div>

    {/* Billed Items Overview */}
    <div className="mb-6">
      <h2 className="font-semibold">Billed Items Overview:</h2>
      <div className="mt-2 p-4 border border-gray-300 rounded">
        <div className="flex justify-between mb-2">
          <span>Quantity:</span>
          <span>10</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>₹ 670.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax Amt:</span>
          <span>₹ 0.00</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total Amount:</span>
          <span>₹ 670.00</span>
        </div>
      </div>
    </div>

    {/* Invoice Calculation */}
    <div>
      <h2 className="font-semibold">Invoice Calculation:</h2>
      <div className="mt-4">
        <div className="flex justify-between mb-2">
          <span>Invoice Amount:</span>
          <input
            type="text"
            className="border border-gray-300 rounded p-2"
            value="₹ 670"
            readOnly
          />
        </div>
        <div className="flex justify-between mb-2">
          <span>Received:</span>
          <input
            type="number"
            className="border border-gray-300 rounded p-2"
            value="222"
          />
        </div>
        <div className="flex justify-between font-bold text-green-600">
          <span>Balance:</span>
          <span>₹ 448.00</span>
        </div>
      </div>
    </div>

    <button className="w-full mt-6 bg-red-600 text-white py-2 rounded shadow">
      Create Your First Invoice
    </button>
  </div>

  {/* Right Panel */}
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-lg font-semibold mb-4">Tax Invoice</h2>
    <div className="border-b pb-4 mb-4">
      <div className="flex justify-between">
        <span>Bill To:</span>
        <span>Arnab</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Invoice Details:</span>
        <span>Invoice No. #1</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Date:</span>
        <span>07-01-2025</span>
      </div>
    </div>

    <div className="border-b pb-4 mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left">#</th>
            <th className="text-left">Item name</th>
            <th className="text-right">Qty</th>
            <th className="text-right">Price/Unit</th>
            <th className="text-right">Amt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Salt</td>
            <td className="text-right">10</td>
            <td className="text-right">₹ 67</td>
            <td className="text-right">₹ 670.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="text-right">
      <div className="mb-2">
        <span>Sub Total:</span>
        <span className="font-bold ml-2">₹ 670.00</span>
      </div>
      <div className="font-bold text-purple-600">
        <span>Total:</span>
        <span className="ml-2">₹ 670.00</span>
      </div>
      <div className="text-sm text-gray-600 mt-4">
        Balance Due: <span className="text-red-600 font-bold">₹ 448.00</span>
      </div>
    </div>
  </div>
</div>
</div>






<div className="min-h-screen bg-gray-50 p-6">
  <div className="grid grid-cols-2 gap-6">
    {/* Left Panel */}
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-lg font-semibold mb-4">
        Enter details to make your first Sale 🚀
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        First sale is made in less than a minute on Vyapar
      </p>

      {/* Invoice Details */}
      <div className="mb-6">
        <h2 className="font-semibold">Invoice Details:</h2>
        <div className="mt-2">
          <div className="flex justify-between">
            <span>Invoice Number: </span>
            <span># {invoice.invoice_number}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Invoice Date:</span>
            <span>{invoice.issue_date}</span>
          </div>
        </div>
      </div>

      {/* Bill To */}
      <div className="mb-6">
        <h2 className="font-semibold">Bill To:</h2>
        <input
          type="text"
          name="customer_id"
          placeholder="Customer Name"
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          value={userDetails.first_name + " " + userDetails.last_name}
          onChange={handleInvoiceChange}
        />
      </div>

      {/* Billed Items Overview */}
      <div className="mb-6">
        <h2 className="font-semibold">Billed Items Overview:</h2>
        {items.map((item, index) => (
          <div
            key={index}
            className="mt-2 p-4 border border-gray-300 rounded mb-2"
          >
            <div className="flex justify-between mb-2">
              <input
                type="text"
                name="item_name"
                placeholder="Item Name"
                value={item.item_name}
                onChange={(e) => handleItemChange(index, e)}
                className="w-1/2 p-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Qty"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                className="w-1/4 p-2 border border-gray-300 rounded ml-2"
              />
              <input
                type="number"
                name="unit_price"
                placeholder="Price/Unit"
                value={item.unit_price}
                onChange={(e) => handleItemChange(index, e)}
                className="w-1/4 p-2 border border-gray-300 rounded ml-2"
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Total Price: ₹ {item.total_price}</span>
              <button
                onClick={() => deleteItem(index)}
                className="bg-red-500 text-white px-4 py-1 rounded shadow hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={addNewItem}
        className="w-full mt-6 bg-blue-600 text-white py-2 rounded shadow"
      >
        Add Item
      </button>

      {/* Invoice Calculation */}
      <div>
        <h2 className="font-semibold">Invoice Calculation:</h2>
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span>Invoice Amount:</span>
            <input
              type="text"
              className="border border-gray-300 rounded p-2"
              value={`₹ ${invoice.total_amount}`}
              readOnly
            />
          </div>
          <div className="flex justify-between mb-2">
            <span>Received:</span>
            <input
              type="number"
              name="received"
              value={invoice.received}
              onChange={handleInvoiceChange}
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex justify-between font-bold text-green-600">
            <span>Balance:</span>
            <span>₹ {invoice.total_amount - invoice.received}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => sendData()}
        className="w-full mt-6 bg-red-600 text-white py-2 rounded shadow"
      >
        Create Your First Invoice
      </button>
    </div>

    {/* Right Panel */}
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Tax Invoice</h2>
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between">
          <span>Bill To:</span>
          <span>{userDetails.first_name + " " + userDetails.last_name}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Invoice Details:</span>
          <span>Invoice No. #{invoice.invoice_number}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Date:</span>
          <span>{invoice.issue_date}</span>
        </div>
      </div>

      <div className="border-b pb-4 mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left">#</th>
              <th className="text-left">Item Name</th>
              <th className="text-right">Qty</th>
              <th className="text-right">Price/Unit</th>
              <th className="text-right">Amt</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.item_name}</td>
                <td className="text-right">{item.quantity}</td>
                <td className="text-right">₹ {item.unit_price}</td>
                <td className="text-right">₹ {item.total_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-right">
        <div className="mb-2">
          <span>Sub Total:</span>
          <span className="font-bold ml-2">₹ {invoice.total_amount}</span>
        </div>
        <div className="font-bold text-purple-600">
          <span>Total:</span>
          <span className="ml-2">₹ {invoice.total_amount}</span>
        </div>
        <div className="text-sm text-gray-600 mt-4">
          Balance Due:{" "}
          <span className="text-red-600 font-bold">
            ₹ {invoice.total_amount - invoice.received}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>;