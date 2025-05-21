import PageHeader from "../components/PageHeader";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch user data");
        setLoading(false); 
      });
  }, []); 

  const filteredUsers = users.filter((item) => {
    const isGenderMatch = filterGender
      ? item.gender.toLowerCase() === filterGender.toLowerCase()
      : true;
    const isSearchMatch =
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase());

    return isGenderMatch && isSearchMatch;
  });

  return (
    <div className="bg-white">
      <PageHeader title={"Users"}>
        <button className="bg-hijau py-2 px-3 rounded-lg text-white hover:bg-green-700">
          Add New User
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
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
          >
            <option value="">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">First Name</th>
              <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Last Name</th>
              <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Email</th>
              <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Phone</th>
              <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Username</th>
              <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((item) => (
                <tr key={item.id} className="hover:bg-green-50">
                  <td className="py-3 px-6 border-b">{item.firstName}</td>
                  <td className="py-3 px-6 border-b">{item.lastName}</td>
                  <td className="py-3 px-6 border-b">{item.email}</td>
                  <td className="py-3 px-6 border-b">{item.phone}</td>
                  <td className="py-3 px-6 border-b">{item.username}</td>
                  <td className="py-3 px-6 border-b">{item.gender}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-3 px-6 border-b">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
