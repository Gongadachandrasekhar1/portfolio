import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Nav";
import Intro from "./intro";
import About from "./about";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./ContactMe";
import Footer from "./footer";
import Projects from "./Projects";

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<Intro />} />
      <Route path="/Nav" exact element={<NavBar />} />
      <Route path="/intro" exact element={<Intro />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/skills" exact element={<Skills />} />
      <Route path="/projects" exact element={<Projects />} />
      <Route path="/ContactMe" exact element={<Contact />} />
      <Route path="/resume" exact element={<Resume />} />
      <Route path="/footer" exact element={<Footer />} />
    </Routes>
  </Router>
);

function App() {
  return (
    <>
      <div>{routes}</div>
    </>
  );
}

export default App;
