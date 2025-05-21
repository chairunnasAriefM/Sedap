import PageHeader from "../components/PageHeader";
import { useState } from "react";
import CustomerData from "../assets/customers_orders_data.json";

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLoyalty, setFilterLoyalty] = useState("");

  const filteredCustomers = CustomerData.customers.filter((item) => {
    const isLoyaltyMatch = filterLoyalty ? item.loyalty.toLowerCase() === filterLoyalty.toLowerCase() : true;
    const isSearchMatch = item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.customerName.toLowerCase().includes(searchTerm.toLowerCase) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase) ||
      item.phone.toLowerCase().includes(searchTerm.toLowerCase) ||
      item.loyalty.toLowerCase().includes(searchTerm.toLowerCase);

    return isLoyaltyMatch && isSearchMatch;
  }
  )


  return (
    <div className="bg-white">
      <PageHeader title={'Customer'}>
        <button className="bg-hijau py-2 px-3 rounded-lg text-white hover:bg-green-700">
          Add New Customer
        </button>
      </PageHeader>

      <div className="flex justify-between items-center p-4 space-x-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={filterLoyalty}
            onChange={(e) => setFilterLoyalty(e.target.value)}
          >
            <option value="">All Loyalty</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Completed</option>
            <option value="Bronze">Bronze</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Customer Name</th>
              <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">email</th>
              <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">phone</th>
              <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">loyalty</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((item) => (
                <tr key={item.orderId} className="hover:bg-green-50">
                  <td className="py-3 px-6 border-b">{item.customerName}</td>
                  <td className="py-3 px-6 border-b">{item.email}</td>
                  <td className="py-3 px-6 border-b">{item.phone}</td>
                  <td className="py-3 px-6 border-b">{item.loyalty}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-3 px-6 border-b">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


    </div>
  )
}