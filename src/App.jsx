import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import About from "./pages/About/About";
import ServicesPage from "./pages/Services/Services";
import Footer from "./components/Footer/Footer";
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
