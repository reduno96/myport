import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
