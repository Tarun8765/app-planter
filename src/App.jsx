import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Career from "./pages/Career";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
