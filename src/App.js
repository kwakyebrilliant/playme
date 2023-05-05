import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Previous from "./components/Previous";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/previous" exact element={<Previous />} />
      </Routes>
    </Router>
  );
}

export default App;
