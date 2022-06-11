import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  const [inputs, setInputs] = useState([]);
  const [usersData, setUsersData] = useState([]);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    fetch("/finTrack/user")
      .then(res => res.json())
      .then(usersData => {
        setUsersData(usersData);
        console.log(usersData);
      })
      .catch(err => {
        console.log("warn error", err);
      });
  }, []);

  const ifTrue = (inputs, usersData) =>
    inputs === usersData.password & usersData.usernamem
      ? console.log(true, inputs, usersData)
      : console.log(false, inputs, usersData);

  const handleSubmit = async e => {
    e.preventDefault();
    ifTrue(inputs, usersData);
    console.log(inputs);
    alert("Login request was sent!");
  };

  return (
    <div className="App">
      <div className="form-holder mt-5">
        <Form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              value={inputs.username || []}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password || []}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text className="text-muted">
              We'll never share your Username or Password with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>{" "}
          <Button variant="secondary" href="/signup">
            Sign Up!
          </Button>{" "}
        </Form>
      </div>
    </div>
  );
}

export default Login;
