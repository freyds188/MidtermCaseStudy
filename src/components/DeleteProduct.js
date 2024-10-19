import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // In a real application, you would fetch the product details here
    console.log(`Fetching details for product with id: ${id}`);
  }, [id]);

  const handleDelete = () => {
    // Here you would typically send a DELETE request to remove the product
    console.log(`Deleting product with id: ${id}`);
    // After deleting, navigate back to the view products page
    navigate('/view-products');
  };

  const handleCancel = () => {
    // Navigate back to the view products page without deleting
    navigate('/view-products');
  };

  return (
    <Container>
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete the product with ID: {id}?</p>
      <Button variant="danger" onClick={handleDelete}>Yes, Delete</Button>
      {' '}
      <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
    </Container>
  );
};

export default DeleteProduct;

