import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Activity from "./components/Activity";
import Companies from "./components/Companies";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="root">
      <Header />
      <About />
      <Activity />
      <Companies />
      <Media />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
