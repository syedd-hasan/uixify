import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import Navbar from "./component/Header&Footer/Header";
import { Footer } from "./component/Header&Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
