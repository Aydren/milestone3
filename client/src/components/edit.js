import { useEffect, useState } from "react";
import NavBar from "./navBar";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Edit() {
  fetch("http://localhost:3000/finTrack/statement/:id/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });

  return (
    <div className="App">
      <NavBar />
      <Form>
        <Form.Group className="mb-3" controlId="formExpenses">
          <Form.Label>Expenses</Form.Label>
          <Form.Select>
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
          <Form.Control type="text" placeholder="Where did you spend" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSpent">
          <Form.Label>Spent</Form.Label>
          <Form.Control
            type="Number"
            placeholder="How much did you spend"
            min="1"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="Date" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
