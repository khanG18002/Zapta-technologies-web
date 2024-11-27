import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/navabr/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/about_us/AboutUs";
import Services from "./components/services/Services";

function App() {
  return (

    // date 27 Nov 2024


    < BrowserRouter >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about Us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </BrowserRouter >
  );
}
export default App;
