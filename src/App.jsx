import React from 'react'
import './App.css'
import Header from "@/components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "@/pages/home/Home.jsx";
import Solutions from "@/pages/Solutions.jsx";
import About from "@/pages/About.jsx";
import Resources from "@/pages/Resources.jsx";
import Contact from "@/pages/Contact.jsx";
import Footer from "@/components/footer/Footer.jsx";

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/solutions/*'} element={<Solutions />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/resources'} element={<Resources />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
        <Footer />

    </div>
  )
}

export default App

