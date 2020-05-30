import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup'
import { Formik } from 'formik';
import { db } from './firebase';
import Products from './Products';

function App() {

  const [modalShow, setModalShow] = React.useState(false);
  const [products, setProducts] = React.useState([{
    name: '',
    color: '',
    size: ''
  }]);

  return (
    <div className="container">
      <header>
        <Image className="logo" src="logo.png" rounded />
        <div id="h1-container">
          <h1>Order Form</h1>
        </div>
        <p>Hi there! Kindly fill out all the fields below.</p>
        <small className="text-muted">Disclaimer: Once the form is submitted, the order is final.</small>
      </header>
      <Formik
        initialValues={{
          name: '',
          username: '',
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
            <Form id="form" onSubmit={handleSubmit}>
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

              <Form.Group controlId="formBasicUsername">
                <Form.Label>Instagram Username</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="formulafashionclothing"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    required
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicAddress">
                <Form.Label>Delivery Address</Form.Label>
                <Form.Control as="textarea" rows="2"
                  name="address"
                  type="text"
                  placeholder="e.g 123 Main Street, Angeles City"
                  onChange={handleChange}
                  value={values.address}
                  required
                />
                <Form.Text className="text-muted">
                    We'll never share your details with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="mobile"
                  type="number"
                  placeholder="e.g 0906 234 7856"
                  onChange={handleChange}
                  value={values.mobile}
                  required
                />
              </Form.Group>

              <Form.Label>Products</Form.Label>
              <Form.Row>
                {products.map((product, index) => <Products index={index} handleChange={handleChange}/>)}
              </Form.Row>

              <Button className="button" variant="outline-danger" type="button"  
                style={{ marginBottom: ".5rem" }} 
                onClick={() => {setProducts([...products, {name: '', color: '', size: ''}]) }}
                >ADD MORE</Button>
  
              <Button className="button" variant="outline-warning" type="button"
                style={{ marginBottom: ".5rem" }} 
                onClick={() => {
                  products.length > 1 && setProducts(prevState => [...prevState.slice(0, -1)]) }}
                >REMOVE</Button>

              <Form.Group controlId="formBasicPayment">
                <Form.Label>Pay By</Form.Label>
                <br />
                <ToggleButtonGroup name="paymentMethod" type="radio" value={values.paymentMethod}>
                  <ToggleButton className="toggleButton" name="paymentMethod" value="cashondelivery" onChange={handleChange}>
                    <div className="img-container margin-top">
                      <img id="cash" src="peso.png" alt="cash logo" />
                      <p>&nbsp;Cash On Delivery</p>
                    </div>
                  </ToggleButton>
                  <ToggleButton className="toggleButton" name="paymentMethod" value="bpi" onChange={handleChange}>
                    <div className="img-container margin-top">
                      <img id="bpi" src="bpi.jpg" alt="bpi logo" />
                      <p>&nbsp;deposit</p>
                    </div>
                  </ToggleButton>
                  <ToggleButton className="toggleButton" name="paymentMethod" value="psbank" onChange={handleChange}>
                    <div className="img-container">
                      <img id="psbank" src="psbank.png" alt="ps bank logo" /> 
                      <p>&nbsp;deposit</p>
                    </div>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Form.Group>

              <Button className="button" variant="outline-danger" type="submit" block>PLACE YOUR ORDER</Button>
              <br />
              <small className="text-muted">
                By clicking place order, you agree with <strong>proceeding with the payment method within the next hour</strong> (except for Cash).
              </small>
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
          <Image className="logo" src="logo.png" rounded />
          <p id="thanks">Thank you for your order! <span>&#128151;</span></p>
          <p>
            You will receive a confirmation message showing the <strong>total cost of your order and number of items</strong>. Instructions for the payment method will be sent as well.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;