import React, { useState } from 'react';

const Profile = () => {
  // Initial dummy data
  const initialUser = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    address: '123 Main Street, Some City, Country',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum metus et felis sollicitudin, nec viverra nunc venenatis.',
    profileImage: 'https://via.placeholder.com/150',  // Placeholder image
  };

  // State to handle user data and edit mode
  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [newImage, setNewImage] = useState(null);

  // Handle input change for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewImage(imageUrl);
    }
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle save
  const handleSave = () => {
    if (newImage) {
      setUser((prevUser) => ({
        ...prevUser,
        profileImage: newImage,
      }));
    }
    setIsEditing(false);
    // Here you would usually save the updated data (e.g., to a server or local storage)
    console.log('Updated user data:', user);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-100 p-5">
      <div className="bg-white p-8 rounded-lg border-2 shadow-2xl w-full max-w-4xl">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <img
            src={newImage || user.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600 shadow-lg transform transition duration-300 hover:scale-110"
          />
        </div>

        {/* Image Upload Button */}
        {isEditing && (
          <div className="flex justify-center mb-6">
            <input
              type="file"
              onChange={handleImageChange}
              className="border-2 border-gray-300 rounded-md py-2 px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>
        )}

        {/* User Info */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-4 mt-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-4 mt-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-4 mt-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Address</label>
            <textarea
              name="address"
              value={user.address}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-4 mt-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Bio</label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-4 mt-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={toggleEdit}
              className="bg-indigo-600 text-white py-3 px-6 rounded-md focus:outline-none hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            {isEditing && (
              <button
                onClick={handleSave}
                className="bg-green-600 text-white py-3 px-6 rounded-md focus:outline-none hover:bg-green-700 transition duration-300 transform hover:scale-105"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
