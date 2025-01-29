import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

export const Dashboard = () => {
  // Access the state passed from the Signin component
  const location = useLocation();
  const { username, firstName, lastName } = location.state || {};

  const [balance, setBalance] = useState(null);
  const usernameWithoutDomain = username.split('@')[0];

  // Fetch the balance on component mount
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        });
        // Format the balance to 2 decimal places
        const formattedBalance = parseFloat(response.data.balance).toFixed(2);
        setBalance(formattedBalance); // Assuming the response contains { balance: '10000' }
      } catch (error) {
        console.error("Error fetching balance:", error.response?.data || error.message);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="bg-teal-50 min-h-screen">
      <Appbar username={username} />
      
        <div className="mb-8 text-center mt-12 text-5xl font-semibold text-teal-800">
        Welcome, {usernameWithoutDomain.charAt(0).toUpperCase() + usernameWithoutDomain.slice(1)}!
        </div>
      <div className="max-w-6xl mx-auto p-6">
        {/* Greeting Section */}

        {/* Balance Section */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-8 border-2 rounded-lg shadow-lg w-full max-w-md">
            <div className="text-center text-3xl font-semibold text-teal-900">
              Your Balance
            </div>
            <div className="mt-4 text-center text-4xl font-bold text-teal-700">
              ₹ {balance || "Loading..."}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Users />
        </div>

        {/* Users Section */}
      </div>
    </div>
  );
};
