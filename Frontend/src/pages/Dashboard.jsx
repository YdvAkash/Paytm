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
    <div>
      <Appbar username={username} />
      <div className="m-8">
        {/* Pass the fetched balance to the Balance component */}
        <Balance value={balance || "Loading..."} />
        <Users />
      </div>
    </div>
  );
};
