import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const Appbar = ({ username }) => {
  // Remove the "@gmail.com" part from the username
  const usernameWithoutDomain = username.replace("@gmail.com", "");

  // Capitalize the first letter of the username
  const capitalizedUsername =
    usernameWithoutDomain.charAt(0).toUpperCase() + usernameWithoutDomain.slice(1);

  // State to handle dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the dropdown if the user clicks outside of the dropdown or avatar
      if (event.target.closest('.user-avatar') === null) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="shadow-lg h-14 flex justify-between bg-teal-600">
      {/* Paytm logo/name */}
      <div className="flex flex-col justify-center h-full ml-4 text-2xl text-white font-semibold">
        Paytm
      </div>

      {/* User Info Section */}
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4 text-black font-semibold  text-lg">
          Hello, {capitalizedUsername}
        </div>

        {/* Avatar with dropdown */}
        <div
          className="relative rounded-full h-12 w-12 bg-blue-200 flex justify-center border border-black-600 mt-1 mr-2 cursor-pointer shadow-md hover:shadow-xl user-avatar" // Avatar background and border updated
          onClick={toggleDropdown}
        >
          <button>
            <div className="flex flex-col justify-center h-full text-xl text-black font-semibold">
              {capitalizedUsername ? `${capitalizedUsername[0]}` : "U"}
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownVisible && (
            <div className="absolute top-14 right-0 w-48 bg-teal-50 shadow-lg border rounded-lg z-50">
              <ul className="py-2">
                <Link to="/profile {usernname}">
                  <li className="px-4 py-2 shadow-sm hover:bg-teal-100 cursor-pointer">
                    Profile
                  </li>
                </Link>
                <Link to="/transactions">
                  <li className="px-4 py-2 shadow-sm hover:bg-teal-100 cursor-pointer">
                    Transactions
                  </li>
                </Link>
                <Link to="/signin" onClick={() => localStorage.removeItem("token")} >
                  <li className="px-4 py-2 shadow-sm hover:bg-teal-100 cursor-pointer">
                    Logout
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
