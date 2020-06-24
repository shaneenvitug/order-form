import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import store from 'store';

function Login(props) {
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const [show, setShow] = React.useState(true)

  const handleChange = (event) => {
    setPassword(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (!(password === 'Biaformula22')) {
      return setError(true);
    }

    store.set('loggedIn', true)
    props.history.push('/porksinigang')
  }

  return(
    <Form id="password" onSubmit={onSubmit}>
      {error && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>WRONG PASSWORD! NOOB</Alert.Heading>
        <p>
          This is top secret. If you are not Bianx, again, KEEP OUT! If you are Bianx, hi :) Just ask ate for the password LOL 
        </p>
      </Alert>}
      <Form.Group controlId="formGroupPassword">
        <Form.Label>What's the password?<span>&#128128;&#128128;&#128128;</span></Form.Label>
        <Form.Control 
          type="password"
          placeholder="KEEP OUT!!! except Bianx :*"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;