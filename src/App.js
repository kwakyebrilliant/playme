import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Previous from "./components/Previous";
import Earners from "./components/Earners";
import Summary from "./dashboard/Summary";
import Word from './dashboard/Word';
import Earnings from './dashboard/Earnings';
import History from "./dashboard/History";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/previous" exact element={<Previous />} />
      <Route path="/earners" exact element={<Earners />} />
      <Route path="/summary" exact element={<Summary />} />
      <Route path="/word" exact element={<Word />} />
      <Route path="/earnings" exact element={<Earnings />} />
      <Route path="/history" exact element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
