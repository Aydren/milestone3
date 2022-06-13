import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import Home from "./components/home";
import Post from "./components/post";
import Login from "./components/login";
import Statement from "./components/statements";
import SignUp from "./components/signUp";
import Edit from "./components/edit";

function App() {
  const [value, setValue] = useState('hello from context')
  return (
    <div className="App">
      <UserContext.Provider value={{value, setValue}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/statements" element={<Statement />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/statements/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
