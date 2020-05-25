import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Modal from 'react-bootstrap/Modal'
import { Formik } from 'formik';
import { db } from './firebase';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [numOfProducts, setNumOfProducts] = React.useState(['']);

  return (
    <div>
      <header>
        <h2>F</h2>
        <h1>Order Form</h1>
        <p>Hi there! Kindly fill out all the fields below then click submit.</p>
        <small className="text-muted">Disclaimer: Once the form is submitted, the order is final.</small>
      </header>
      <Formik
        initialValues={{
          name: '',
          email: '',
          address: '',
          mobile: '',
          paymentMethod: ''
        }}
        onSubmit={(values) => {
          console.log(values)
          setModalShow(true);
          db.collection('orders').add(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          submitForm,
          isSubmitting
        }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  onChange={handleChange}
                  value={values.name}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="email@johndoe.com"
                  onChange={handleChange}
                  value={values.email}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicAddress">
                <Form.Label>Delivery Address</Form.Label>
                <Form.Control
                  name="address"
                  type="text"
                  placeholder="e.g 123 Main Street, Angeles City"
                  onChange={handleChange}
                  value={values.address}
                />
              </Form.Group>

              <Form.Group controlId="formBasicAddress">
                <Form.Label>Products</Form.Label>
                {numOfProducts.map((product, index) => <Form.Control
                  name={`products-${index}`}
                  type="text"
                  placeholder={`Your product ${index}`}
                  onChange={(value) => { handleChange(value) }}
                  value={values.products}
                  style={{ marginBottom: ".5rem" }}
                />)}
              </Form.Group>

              <Button variant="info" type="button" style={{ marginBottom: ".5rem" }}
                onClick={() => {
                  setNumOfProducts(prevState => [...prevState, ''])
                }}>Add row</Button>

              <Form.Group controlId="formBasicMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="mobile"
                  type="number"
                  placeholder="e.g 0906 234 7856"
                  onChange={handleChange}
                  value={values.mobile}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPayment">
                <Form.Label>Pay By</Form.Label>
                <br />
                <ToggleButtonGroup name="paymentMethod" type="radio" value={values.paymentMethod}>
                  <ToggleButton name="paymentMethod" value="cash" onChange={handleChange}>Cash</ToggleButton>
                  <ToggleButton name="paymentMethod" value="bpi" onChange={handleChange}>BPI deposit</ToggleButton>
                  <ToggleButton name="paymentMethod" value="psbank" onChange={handleChange}>PS Bank deposit</ToggleButton>
                </ToggleButtonGroup>
              </Form.Group>

              <Button variant="info" type="submit">Submit</Button>
            </Form>
          )}
      </Formik>

      {/* Modal for when submit button is submitted */}

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Body>
          <h4>F</h4>
          <p>
            Thank you for your order.
        </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;