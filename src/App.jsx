import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

import CallToAction from "./components/CallToAction";
import CallToAction2 from "./components/CallToAction2";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        

        <div id="pendaftaran">
          <CallToAction />
        </div>

        <div>
          <CallToAction2 />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
