import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ManageService = () => {
  const [services, manageService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => manageService(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted");
      });
  };

  return (
    <div className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ServiceName</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr>
              <td>{service.name}</td>
              <td>{service.price}</td>
              <td>
                <Button className="btn-danger" onClick={() => handleDelete(service._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageService;
