import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

 class CreateCat extends React.Component {


  render() {
    return (
      <Container className="mt-5">
      <Form onSubmit={this.props.handleCatSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="color">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="spayNeuter">
          <Form.Check type="checkbox" label="spay-neuter" />
        </Form.Group>
        <Button type="submit">Add Cat</Button>
      </Form>
    </Container>
    )
  }
}
export default CreateCat;