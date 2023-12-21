// App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/build";
import SignUp from "./pages/signup";
import Login from "./pages/login"; // Import the Login component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add API routes here if needed */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/annual" element={<AnnualReport />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> {/* Add the Login route */}
      </Routes>
    </Router>
  );
}

export default App;
