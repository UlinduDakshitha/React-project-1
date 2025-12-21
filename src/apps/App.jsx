import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import FourPage from "../pages/FourPage";
import FivePage from "../pages/FivePage";
import SixPage from "../pages/SixPage";
import AppNavbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
 import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <AppNavbar />
        <ProgressBar />
        <main style={{ flex: 1, padding: 30, overflow: "hidden" }}>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/page2" element={<SecondPage />} />
            <Route path="/page3" element={<ThirdPage />} />
            <Route path="/page4" element={<FourPage />} />
            <Route path="/page5" element={<FivePage />} />
            <Route path="/page6" element={<SixPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
