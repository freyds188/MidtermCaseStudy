import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // In a real application, you would fetch the product data based on the id
    // For now, we'll just set some dummy data
    setProduct({
      name: 'Sample Product',
      price: '19.99',
      quantity: '100'
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a PUT request to update the product
    console.log('Updated product:', product);
    // After updating, navigate back to the view products page
    navigate('/view-products');
  };

  return (
    <Container>
      <h2>Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name"
            value={product.name} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control 
            type="number" 
            name="price"
            value={product.price} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="productQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control 
            type="number" 
            name="quantity"
            value={product.quantity} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
    </Container>
  );
};

export default EditProduct;

