import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp() {
  return (
    <div className="App">
      <div>
        <h1>hello world</h1>
        <h2>this is signUp.js</h2>
        <div className="form-holder">
          <Form>
            <Form.Group className="mb-3" controlId="formCreateUsername" >
              <Form.Label>Create Username</Form.Label>
              <Form.Control type="text" placeholder="Enter a unique Username"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCreatePassword">
              <Form.Label>Create Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter a unique Password"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Text className="text-muted">
                We'll never share your Username and Password with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up!
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
