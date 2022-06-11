import StatementList from "./listStatement";
import BarGraph from "./barGraph";
import NavBar from "./navBar";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <StatementList />
      </div>
      <div>
        <BarGraph />
      </div>
    </div>
  );
}

export default Home;
