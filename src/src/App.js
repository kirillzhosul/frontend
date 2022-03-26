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
import StatusPage from "./pages/StatusPage";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/legal/LegalPrivacyPolicy";
import TermsOfUse from "./pages/legal/LegalTermsOfUse";

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
          <Route path="/status" element={<StatusPage/>}/>
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/legal/terms-of-use" element={<TermsOfUse/>}/>
          
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}


export default App;