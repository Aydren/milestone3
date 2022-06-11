import { useEffect, useState } from "react";
import NavBar from "./navBar";

function Edit() {
  const [statmentData, setStatementData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/finTrack/statement/:id/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  });

  return (
    <div className="App">
      <NavBar />
      <p>you are in edit.js</p>
    </div>
  );
}

export default Edit;
