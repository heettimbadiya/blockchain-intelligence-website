import React from 'react'
import './App.css'
import Header from "@/components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "@/pages/home/Home.jsx";

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>

    </div>
  )
}

export default App

