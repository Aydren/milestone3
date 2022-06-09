import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "./navBar";

function Post() {
  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="App">
      <NavBar />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formExpenses">
          <Form.Label>Expenses</Form.Label>
          <Form.Select name="expenses" value={inputs.expenses} onChange={handleChange}>
            <option>Entertainment</option>
            <option>Food</option>
            <option>Housing</option>
            <option>Insurance</option>
            <option>Medical</option>
            <option>Miscellaneous</option>
            <option>Personal Spending</option>
            <option>Saving, Investing, and Debt Payments</option>
            <option>Transportation</option>
            <option>Utilities</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Where did you spend"
            value={inputs.location}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSpent">
          <Form.Label>Spent</Form.Label>
          <Form.Control
            type="Number"
            placeholder="How much did you spend"
            value={inputs.spent}
            min="1"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="Date"
            value={inputs.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Post;
