import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import ScriptTag from "react-script-tag";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Work from "./pages/Work"

function App() {
  return (
    <Router>
    <div>
        <Nav />
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        <ScriptTag type="text/javascript" src="../main.js" />
     
    </div>
    </Router>
  );
}

export default App;
