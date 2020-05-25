import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [modeOfPayment, setModeOfPayment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <header>
        <h2>IMAGE OF LOGO HERE PREFERABLY A SQUARE OF THE LETTER F</h2>
        <h1>ORDER FORM</h1>
        <p>Hi there! Kindly fill out all the fields below then click submit.</p>
        <p>Disclaimer: Once the form is submitted, the order is final.</p>
      </header>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="email@johndoe.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicAddress">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control type="text" placeholder="e.g 123 Main Street, Angeles City" />
        </Form.Group>

        <Form.Group controlId="formBasicMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="e.g 0906 234 7856" />
        </Form.Group>

        <Form.Group controlId="formBasicPayment">
          <Form.Label>Pay By</Form.Label>
          <br/>
          <Form.Check inline label="Cash" type="radio" id="cash" />
          <Form.Check inline label="BPI deposit" type="radio" id="bpi" />
          <Form.Check inline label="PS Bank deposit" type="radio" id="ps-bank" />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default App;