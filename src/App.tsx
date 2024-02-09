import "./App.css";
import { Toaster } from "react-hot-toast";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Footer />
    </div>
  );
}

export default App;
