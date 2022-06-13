import { useState, useEffect } from "react";

function FirstFiveState() {
  const [statementData, setStatementData] = useState([]);

  useEffect(() => {
    fetch("/finTrack/statement/top-5")
      .then(res => res.json())
      .then(statementData => {
        setStatementData(statementData);
        console.log(statementData);
      })
      .catch(err => {
        console.log("warn error", err);
      });
  }, []);

  let statementFormatted = statementData.map(statement => {
    return (
      <div className="statementLog" key={statement.id}>
        <div key={statement.id} className="cardBody">
          <li className="statementExpenses">{statement.expenses}</li>
          <li className="statementLocation">{statement.location}</li>
          <li className="statementSpent">${statement.spent}</li>
          <li className="statementDate">{statement.date}</li>
        </div>
      </div>
    );
  });
  return <div key={FirstFiveState}>{statementFormatted}</div>;
}

export default FirstFiveState;