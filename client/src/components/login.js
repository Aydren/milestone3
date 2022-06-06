import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>this is login.js</h2>
      <div className="form-holder">
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
