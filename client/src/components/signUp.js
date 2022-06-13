import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function SignUp() {
  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    /* console.log(inputs); */
    await fetch(
      "http://localhost:3000/finTrack/users/new-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      },
      alert("New user has been posted!")
    );
  };

  return (
    <div className="App">
      <div>
        <div className="mt-5 form-holder">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formCreateUsername">
              <Form.Label>Create Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a unique Username"
                name="username"
                value={inputs.username || []}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCreatePassword">
              <Form.Label>Create Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter a unique Password"
                name="password"
                value={inputs.password || []}
                onChange={handleChange}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formPasswordAuth">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group> */}

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
