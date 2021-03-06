import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "./UserContext";

function Login() {
  const [inputs, setInputs] = useState([]);
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    /* console.log(inputs); */
    let response = await fetch("/finTrack/users/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    if (response.status === 200) {
      setUser(inputs.username)
      navigate("/statements");
    } else {
      setError("Username/password incorrect");
    }
  };

  return (
    <div className="App">
      <div className="form-holder mt-5">
        <Form onSubmit={handleSubmit}>
          <pre>{JSON.stringify(user, null, 2)}</pre>
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
          {error !== null ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : null}
          <Button variant="primary" type="submit">
            Login
          </Button>{" "}
          <Button
            variant="secondary"
            href="/signup"
            onClick={() => setUser(inputs.username)}
          >
            Sign Up!
          </Button>{" "}
        </Form>
      </div>
    </div>
  );
}

export default Login;
