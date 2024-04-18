import React, { useState } from "react";

// UserProfile component
const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

// EditProfile component
const EditProfile = ({ user }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};

// App component
const App = () => {
  // Sample user data
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  // State to manage edit mode
  const [editMode, setEditMode] = useState(false);

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <h1>User Profile Application</h1>
      {editMode ? (
        <EditProfile user={userData} />
      ) : (
        <UserProfile user={userData} />
      )}
      <button onClick={toggleEditMode}>
        {editMode ? "View Mode" : "Edit Mode"}
      </button>
    </div>
  );
};

export default App;
