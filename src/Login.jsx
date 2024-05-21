import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://ahs-node-auth-app.onrender.com/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
        cookies.set("Token", result.data.token, {
          path: "/",
        });
        window.location.href = "/auth";
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <h2>Login</h2>
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
        {login ? (
          <p className="text-success">Login Successful!</p>
        ) : (
          <p className="text-danger">You are not logged in!</p>
        )}
      </Form>
    </>
  );
}

export default Login;
