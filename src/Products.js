import React from 'react';
import {Form, Col} from 'react-bootstrap'

const FormInput = ({ name, productType, placeholder, handleChange, setProductType, required }) => {
  return (
    <Form.Control
      name={name}
      type="text"
      placeholder={placeholder}
      onChange={(event) => { 
        handleChange(event)
        setProductType(event.target.value);
      }}
      value={productType}
      style={{ marginBottom: ".5rem" }}
      required={required}
    />
  )
}

const Products = (props) => {
  const [productName, setProductName] = React.useState('');
  const [productColor, setProductColor] = React.useState('');
  const [productSize, setProductSize] = React.useState('');

  return (
    <>
      <Form.Group as={Col} md="6" className="productName">
        <FormInput 
          controlId="formBasicProductName"
          label="Product Name"
          name={`name-${props.index}`}
          productType={productName}
          placeholder="e.g Knit Vneck Top"
          handleChange={props.handleChange}
          setProductType={setProductName}
          required={true}
        />
      </Form.Group>

      <Form.Group as={Col} md="3" className="productColor">
        <FormInput 
          controlId="formBasicProductColor"
          label="Color/Print"
          name={`color-${props.index}`}
          productType={productColor}
          placeholder="Color"
          handleChange={props.handleChange}
          setProductType={setProductColor}
          required= {true}
        />
      </Form.Group>
      
      <Form.Group as={Col} md="3" className="productSize">
        <FormInput 
          controlId="formBasicProductSize"
          label="Size (only for shorts)"
          name={`size-${props.index}`}
          productType={productSize}
          placeholder="Size (for shorts)"
          handleChange={props.handleChange}
          setProductType={setProductSize}
          required={false}
        />
      </Form.Group>
    </>
  )
}

export default Products;