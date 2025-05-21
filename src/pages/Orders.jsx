import { useState } from 'react';
import PageHeader from "../components/PageHeader";
import OrderData from "../assets/customers_orders_data.json";

export default function Orders() {

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("");

    const filteredOrders = OrderData.orders.filter((item) => {
        const isStatusMatch = filterStatus ? item.status.toLowerCase() === filterStatus.toLowerCase() : true;
        const isSearchMatch = item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.orderDate.toLowerCase().includes(searchTerm.toLowerCase());

        return isStatusMatch && isSearchMatch;
    });

    return (
        <div className="bg-white h-screen">
            <PageHeader title={'Order'}>
                <button className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Add New Order
                </button>
            </PageHeader>

            <div className="flex justify-between items-center p-4 space-x-4">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 border border-hijau rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="px-4 py-2 border border-hijau rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="">All Status</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 table-fixed">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Customer Name</th>
                            <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Status</th>
                            <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Total Price</th>
                            <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((item) => (
                                <tr key={item.orderId} className="hover:bg-green-50">
                                    <td className="py-3 px-6 border-b">{item.customerName}</td>
                                    <td className="py-3 px-6 border-b">{item.status}</td>
                                    <td className="py-3 px-6 border-b">{item.totalPrice}</td>
                                    <td className="py-3 px-6 border-b">{item.orderDate}</td>
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
    );
}
