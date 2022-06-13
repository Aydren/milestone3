import { useContext } from "react";
import { UserContext } from "./UserContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavBar() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="App">
      <Container>
        <Navbar>
          <Navbar.Brand href="/home">Prime Financial Tracker</Navbar.Brand>
          <Nav>
            {/* <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link href="/statements">Statements</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/post">Post</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/" onClick={()=>setUser(null)}>Logout </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavBar;
