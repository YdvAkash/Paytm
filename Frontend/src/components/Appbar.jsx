import { useState } from "react";

export const Appbar = ({ username }) => {
  // Remove the "@gmail.com" part from the username
  const usernameWithoutDomain = username.replace("@gmail.com", "");

  // Capitalize the first letter of the username
  const capitalizedUsername = usernameWithoutDomain.charAt(0).toUpperCase() + usernameWithoutDomain.slice(1);

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4 text-2xl text-blue-500 font-bold">
        Paytm   
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
          Hello {capitalizedUsername}
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center border border-indigo-600  mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl ">
            {capitalizedUsername ? `${capitalizedUsername[0]}` : "U"}
          </div>
        </div>
      </div>
    </div>
  );
};
