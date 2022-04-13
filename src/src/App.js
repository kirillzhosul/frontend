// Libraries.
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Components.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages.
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";


const App = function() {
  /// @description Main app container.
  return (
    <BrowserRouter>
      <div className="App container-fluid text-center d-flex flex-column min-vh-100">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}


export default App;