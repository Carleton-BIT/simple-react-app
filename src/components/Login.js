import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {handleLogin} from "../services/ToDoApi";


function Login({setAuthenticated}) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      handleLogin(credentials)
      .then((data) => {
        if (data.token) {
          // Store the token in localStorage
          localStorage.setItem('token', data.token);
          // Set authenticated in state (triggers navigation away from login page)
          setAuthenticated(true);
        } else {
          // Handle authentication errors
          alert('Invalid credentials');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
      <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                  <Form.Control
                    name="username"
                    type="text"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Control
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>;
            </Col>
          </Row>
      </Container>
  );
}

export default Login;
