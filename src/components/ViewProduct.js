import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewProduct = () => {
  // This is a placeholder for product data. In a real application, 
  // you would fetch this data from an API or database.
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 100 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 50 },
    // Add more products as needed
  ];

  return (
    <Container>
      <h2>View Products</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Link to={`/edit-product/${product.id}`}>
                  <Button variant="primary" size="sm">Edit</Button>
                </Link>
                {' '}
                <Link to={`/delete-product/${product.id}`}>
                  <Button variant="danger" size="sm">Delete</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/add-product">
        <Button variant="success">Add New Product</Button>
      </Link>
    </Container>
  );
};

export default ViewProduct;

