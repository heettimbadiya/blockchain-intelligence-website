import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css'
import Header from "@/components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "@/pages/home/Home.jsx";
import Solutions from "@/pages/Solutions.jsx";
import About from "@/pages/About.jsx";
import Resources from "@/pages/Resources.jsx";
import Contact from "@/pages/Contact.jsx";
import Footer from "@/components/footer/Footer.jsx";
import Careers from "@/pages/Careers.jsx";
import Culture from "@/pages/Culture.jsx";
import Blog from "@/pages/Blog.jsx";
import Report from "@/pages/Report.jsx";
import Subscribe from "@/pages/Subscribe.jsx";
import SingleBlog from "@/pages/SingleBlog.jsx";
import { Toaster } from "react-hot-toast";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    // Prevent script from being added multiple times
    if (document.getElementById('tawkto-script')) return;
    const script = document.createElement('script');
    script.id = 'tawkto-script';
    script.async = true;
    script.src = 'https://embed.tawk.to/686cdf0b47b3c5190d6abd13/1ivkkei1n'; // TODO: Replace with your Tawk.to property ID
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
    return () => {
      // Optionally clean up if needed
      // document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/solutions/*'} element={<Solutions />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/resources'} element={<Resources />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/careers'} element={<Careers />} />
        <Route path={'/culture'} element={<Culture />} />
        <Route path={'/blog'} element={<Blog />} />
        <Route path={'/blog/:id'} element={<SingleBlog />} />
        <Route path={'/report'} element={<Report />} />
        <Route path={'/subscribe'} element={<Subscribe />} />
      </Routes>
        <Footer />

    </div>
  )
}

export default App

