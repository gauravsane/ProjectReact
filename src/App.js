import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
// import PacmanLoader from "react-spinners/PacmanLoader";
import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Loader from "./Loader";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="App">
          {/* <PacmanLoader
        color={'yellow'}
        // loading={loading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
          <Loader />
        </div>
      ) : (
        <div>
          <Navbar />
          {/* <Home />
      <About /> */}
            <Router>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Skills" element={<Skills />}></Route>
                <Route path="/Qualification" element={<Qualification />}></Route>
                <Route path="/Portfolio" element={<Portfolio />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
              </Routes>
            </Router>
        </div>
      )}
    </div>
  );
};

export default App;
