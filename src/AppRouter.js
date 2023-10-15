import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SelectPage from "./components/SelectPage/SelectPage";
import ResultPage from "./components/ResultPage/ResultPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/result/:buttonId" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
