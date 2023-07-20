import React from "react";
import "./App.css";
import Choice from "./page/Choice";
import Main from "./page/Main";
import Result from "./page/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
