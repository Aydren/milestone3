import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function StatementList() {
  const [statmentData, setStatementData] = useState([]);

  useEffect(() => {
    fetch("/finTrack/statement")
      .then(res => res.json())
      .then(statmentData => {
        setStatementData(statmentData);
        /* console.log(statmentData); */
      })
      .catch(err => {
        console.log("warn error ❌", err);
      });
  }, []);

  let statementFormatted = statmentData.map(statement => {
    return (
      <div key={statement.id}>
        <Table striped hover>
          <tbody>
            <tr key={statement.id}>
              <td>
                <a onClick={()=>{

                }} href={`/statements/edit/${statement.id}`}> Edit Statement</a>
              </td>
              <td>{statement.expenses}</td>
              <td>{statement.location}</td>
              <td>${statement.spent}</td>
              <td>{statement.date}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="mx-5">
        <div key={StatementList}>{statementFormatted}</div>
      </div>
    </div>
  );
}

export default StatementList;
