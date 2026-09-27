import React from "react";
import MyPortfolio from "./MyPortfolio";
import ChyGYM from "./Projects/chyGYM.jsx";
import ChoudharyMart from "./Projects/ChoudharyMart.jsx";

export default function App() {
  return (
    <MyPortfolio>
      {/* Featured Projects */}
      <ChyGYM />
      <ChoudharyMart />
    </MyPortfolio>
  );
}
