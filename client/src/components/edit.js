import { useState } from "react";
import NavBar from "./navBar";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Edit() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(null);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    /* console.log(inputs); */
    await fetch("/finTrack/statement/edit/:id", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    alert("handle submit success!");
  };

  return (
    <div className="App">
      <NavBar />
      <div className="forms mx-5 my-2 p-4 text-center rounded">
        <Form onSubmit={handleSubmit}>
      <h1>Edit statement</h1>
          <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={'user'}
            onSubmit={handleChange}
            disabled={true}
          />
        </Form.Group>

          <Form.Group className="mb-3" controlId="formExpenses">
            <Form.Label>Expenses</Form.Label>
            <Form.Select
              name="expenses"
              value={inputs.expenses}
              onChange={handleChange}
            >
              <option>Select Expense</option>
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
              name="location"
              value={inputs.location || []}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSpent">
            <Form.Label>Spent</Form.Label>
            <Form.Control
              type="Number"
              placeholder="How much did you spend"
              name="spent"
              value={inputs.spent || []}
              min="1"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="Date"
              name="date"
              value={inputs.date || []}
              onChange={handleChange}
            />
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Edit;
