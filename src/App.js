import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import CaloriesContainer from "./components/CaloriesContainer";
import ResultsContainer from "./components/ResultsContainer";
import { AnimatePresence } from "framer-motion";

function App() {
  const [userData, setUserData] = useState();
  const [redirectValue, setValue] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleScroll = () => {
    const isTop = window.scrollY < 1;
    isTop ? setScrolled(false) : setScrolled(true);
    console.log(scrolled);
  };

  const handleClickHome = () => {
    setValue("/calories");
  };

  const handleClick = (userInput) => {
    setUserData(userInput);
  };

  const handleRedirect = (e) => {
    const path = e.target.name;
    setValue(path);
  };

  return (
    <Router>
      <NavBar
        onClick={handleRedirect}
        redirectPath={redirectValue}
        scrolled={scrolled}
      />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} onClick={handleClickHome} />}
          />
          <Route
            path="/calories"
            render={(props) => (
              <CaloriesContainer {...props} onClick={handleClick} />
            )}
          />
          <Route
            path="/results"
            render={(props) => (
              <ResultsContainer {...props} userInput={userData} />
            )}
          />
        </Switch>
      </AnimatePresence>

      <About />
      <Contact />
    </Router>
  );
}

export default App;
