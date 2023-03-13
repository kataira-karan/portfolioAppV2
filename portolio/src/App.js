import "./App.css";
import Home from "./Compnents/Home/Home";
import Overlays from "./Compnents/Overaly/Overlays";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./Compnents/Projects/Projects";
import ComingSoon from "./Compnents/ComingSoon/ComingSoon";
import CaseStudy from "./Compnents/CaseStudy/CaseStudy";
import Connect from "./Compnents/Connect/Connect";
import Skills from "./Compnents/Skills/Skills";

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

            <Route exact path="/home/:projectName/casestudy">
              <CaseStudy></CaseStudy>
            </Route>

            <Route exact path="/home/connect">
              <Connect></Connect>
            </Route>
            <Route exact path="/home/skills">
              <Skills></Skills>
            </Route>

            <Route exact path="/comingsoon">
              <ComingSoon></ComingSoon>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
