import StatementList from "./listStatement";
import NavBar from "./navBar";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <div><StatementList /></div>
    </div>
  );
}

export default Home;
