import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Main } from "./Main";
import { Prints } from "./Prints/Prints";

export const PageRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="prints/:id" element={<Prints />} />
      </Routes>
    </Router>
  );
};
