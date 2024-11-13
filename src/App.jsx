import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import TestimonialPage from "./pages/Home/Sections/TestimonialPage";
import ContactPage from "./pages/Contact/ContactPage";
import CampaignsPage from "./pages/Home/Sections/CampaignsPage";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import ServicesPage from "./pages/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
