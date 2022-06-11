import StatementList from "./listStatement";
import NavBar from "./navBar";

function Statement() {
  return (
    <div className="App">
      <div className="home-holder">
        <NavBar />
        <div>
          <StatementList />
        </div>
      </div>
    </div>
  );
}

export default Statement;
