import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Import your page components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; // Make sure path is correct
import Footer from "./components/Footer"; // Make sure path is correct
import Gallery from "./pages/Gallery"; // Make sure path is correct
import Services from "./pages/Services"; // Make sure path is correct
import About from "./pages/About"; // Make sure path is correct
import Shop from "./pages/Shop"; // Make sure path is correct

// Import other pages if you have them, or create placeholders

function App() {
  return (
    <BrowserRouter>
      {/* 2. Place Navbar OUTSIDE Routes so it stays visible on every page */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* 3. Add routes for your other links */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />



        {/* Optional: Add a "Not Found" route */}
        <Route path="*" element={<div className="pt-32 text-center">404 - Page Not Found</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;