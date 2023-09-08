import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./container/Login";
import Main from "./container/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
