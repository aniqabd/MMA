import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useState, Text } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const now = 60;

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MMA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Journal</Nav.Link>
              <NavDropdown title="Goals" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Exercise</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Nutrition</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sleep</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="exerciselogo.jpeg" />
            <Card.Body>
              <Card.Title>Exercise</Card.Title>
              <Card.Text>
                View today's exercise suggestions
              </Card.Text>
              <Button variant="primary">Lets go!</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Nutrition</Card.Title>
              <Card.Text>
                Nutrition shorts
              </Card.Text>
              <Button variant="primary">I'm hungry!</Button>
            </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Sleep</Card.Title>
              <Card.Text>
                Logging your daily sleep schedule
              </Card.Text>
              <Button variant="primary">Snooze time!</Button>
            </Card.Body>
          </Card></Col>
        </Row>
      </Container>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>How are you feeling today?</Form.Label>
            <Form.Control as="textarea" type="text" placeholder="" />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default BasicExample;