import { useState, useEffect } from "react";
import { Home } from "./components/Home";
import { Form } from "./components/Form";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter as Router,	Routes, Route, Link } from 'react-router-dom';
import OrganizationSidebar from "./components/OrganizationSidebar";
import { UserHome } from "./components/UserHome";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form data={landingPageData.signup} />} />
        <Route path="/signin" element={<Form data={landingPageData.signin}/>} />
        <Route path="/facility-signin" element={<Form data={landingPageData.hospitalSignin}/>} />
        <Route path="/facility-signup" element={<Form data={landingPageData.hospitalSignup}/>} />

        <Route path="/org-sidebar" element={<OrganizationSidebar />} />
        <Route path="/user-home" element={<UserHome />} />
      </Routes>
    </Router>
  );
};

export default App;
