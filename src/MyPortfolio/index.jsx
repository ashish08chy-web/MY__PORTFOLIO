import React from "react";
import BackgroundGlow from "./components/BackgroundGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";

export {
  BackgroundGlow,
  Navbar,
  Hero,
  Skills,
  About,
  Footer,
};

export default function MyPortfolio({ children }) {
  return (
    <div className="bg-[#04060d] text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-400 selection:text-black font-sans">
      <BackgroundGlow />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        {children}
        <About />
      </main>
      <Footer />
    </div>
  );
}
