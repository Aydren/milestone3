import { useEffect, useState } from "react";
import NavBar from "./navBar";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/library/statement")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data);
      })
      .catch(err => {
        console.log("warn error", err);
      });
  }, []);

  let statementFormatted = data.map(statement => {
    return (
      <div className="cards" key={statement.date}>
        <p>start</p>
        <div key={statement.date} className="cardBody">
            <li className="statementUser">{statement.user}</li>
            <li className="statementCategory">{statement.category}</li>
            <li className="statementLocation">{statement.location}</li>
            <li className="statementSpent">{statement.spent}</li>
            <li className="statementDate">{statement.date}</li>
        </div>
        <p>end</p>
      </div>
    );
  });

  return (
    <div className="App">
      <NavBar />
      <h1>hello world</h1>
      <h2>this is Home.js</h2>
      <div key={Home}>{statementFormatted}</div>
    </div>
  );
}

export default Home;
