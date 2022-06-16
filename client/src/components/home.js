import { useContext } from "react";
import { UserContext } from "./UserContext";
import NavBar from "./navBar";
import FirstFiveState from "./firstFiveState";

function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="App">
      <NavBar />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <FirstFiveState />
    </div>
  );
}

export default Home;
