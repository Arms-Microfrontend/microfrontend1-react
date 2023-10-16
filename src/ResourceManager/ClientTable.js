import React from "react";
import "../Styles/ClientTable.css";

function ClientTable({ clientData }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>City</th>
            <th>Postal Code</th>
          </tr>
        </thead>
        <tbody>
          {clientData.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phoneNumber}</td>
              <td>{client.address}</td>
              <td>{client.city}</td>
              <td>{client.postalCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
