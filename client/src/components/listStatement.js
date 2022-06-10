import { useEffect, useState } from "react";

function StatementList() {
  const [statmentData, setStatementData] = useState([]);

  useEffect(() => {
    fetch("/finTrack/statement")
      .then(res => res.json())
      .then(statmentData => {
        setStatementData(statmentData);
        console.log(statmentData);
      })
      .catch(err => {
        console.log("warn error", err);
      });
  }, []);

  let statementFormatted = statmentData.map(statement => {
    return (
      <div className="statementLog" key={statement.id}>
        <p>start</p>
        <div key={statement.id} className="cardBody">
          <li className="statementId">
            <a href="/statements/edit/:id">{statement.id}</a>
          </li>
          <li className="statementUser">{statement.username.username}</li>
          <li className="statementExpenses">{statement.expenses}</li>
          <li className="statementLocation">{statement.location}</li>
          <li className="statementSpent">${statement.spent}</li>
          <li className="statementDate">{statement.date}</li>
        </div>
        <p>end</p>
      </div>
    );
  });

  return (
    <div className="App">
      <div key={StatementList}>{statementFormatted}</div>
    </div>
  );
}

export default StatementList;
