import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  // Replace with backend call
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <>
      {/* <div className="font-semibold text-4xl  text-teal-600 mb-8 mt-10 text-center">

      </div> */}
      <div className="my-4 max-w-md mx-auto">
      <p className="font-semibold text-4xl text-green-800 mb-8 mt-10 text-center">
        User Directory
      </p>
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-4 py-2 border rounded-xl border-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-800 transition duration-300 shadow-md"
        />
      </div>
      <div className="space-y-6">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      <div className="flex items-center space-x-6">
        {/* Avatar */}
        <div className="rounded-full h-16 w-16 bg-teal-500 text-white flex justify-center items-center text-2xl font-bold shadow-lg">
          {user.firstName[0]}
        </div>

        <div className="flex flex-col">
          <div className="text-xl font-semibold text-teal-700">{user.firstName} {user.lastName}</div>
          <div className="text-sm text-gray-600">{user.email}</div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <Button
          onClick={() => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
