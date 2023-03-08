import logo from "./logo.svg";
import "./App.css";
import Home from "./Compnents/Home/Home";
import Overlays from "./Compnents/Overaly/Overlays";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./Compnents/Projects/Projects";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Overlays></Overlays>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/home/projects">
              <Projects></Projects>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
