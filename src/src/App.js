import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

const App = function () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
