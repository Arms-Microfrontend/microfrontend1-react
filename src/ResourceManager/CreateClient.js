import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/ClientCreationForm.css";

function ClientCreationForm() {
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({
      ...clientData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the existing client data from local storage
    const existingData = JSON.parse(localStorage.getItem("clientData"));

    // Initialize updatedData as an array or an empty array if no data is found
    const updatedData = Array.isArray(existingData) ? existingData : [];

    // Append the new client data to the existing data
    updatedData.push(clientData);

    // Save the updated data back to local storage
    localStorage.setItem("clientData", JSON.stringify(updatedData));

    // Clear the form fields after submission
    setClientData({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      postalCode: "",
    });

    console.log("Client Data:", updatedData);
  };

  return (
    <div className="client-creation-form">
      <Link to="/client-manager">
        <button className="back-button">Back to Client Manager</button>
      </Link>
      <h2>Create Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={clientData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={clientData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={clientData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              name="address"
              value={clientData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={clientData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={clientData.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Create Client</button>
      </form>
    </div>
  );
}

export default ClientCreationForm;
