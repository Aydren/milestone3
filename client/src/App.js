import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Post from "./components/post";
import Login from "./components/login";
import Statement from "./components/statements";
import SignUp from "./components/signUp";
import Edit from "./components/edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/statements" element={<Statement/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/statements/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
