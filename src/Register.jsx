import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://ahs-node-auth-app.onrender.com/register",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
        {register ? (
          <p className="text-success">You are registered Successfully!</p>
        ) : (
          <p className="text-danger">You are not registered!</p>
        )}
      </Form>
    </>
  );
}

export default Register;
