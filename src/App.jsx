import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TermsConditions from "./components/Term";
// import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Notigam from "./page/Notigam";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nottingham" element={<Notigam /> } />
        {/* <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} /> */}
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
