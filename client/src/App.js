import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./components/UserContext";
import { useState, useMemo } from "react";
import Home from "./components/home";
import Post from "./components/post";
import Login from "./components/login";
import Statement from "./components/statements";
import SignUp from "./components/signUp";
import Edit from "./components/edit";

function App() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  /* useMemo takes in a object '({user, setUser})' and updates it every time '[user,setUser]' changes. This essentially prevents it from changes unless '[user,setUser]' is changed*/
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={providerValue}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/statements" element={<Statement />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/statements/edit/:id" element={<Edit />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
