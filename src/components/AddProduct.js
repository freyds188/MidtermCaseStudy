// src/components/AddProduct.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [barcode, setBarcode] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting product data to the backend goes here
  };

  return (
    <Container>
      <h2>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter product name" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="barcode">
          <Form.Label>Barcode</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter barcode" 
            value={barcode} 
            onChange={(e) => setBarcode(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            placeholder="Enter description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
