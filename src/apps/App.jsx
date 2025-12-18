import { useSelector } from "react-redux";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import FourPage from "../pages/FourPage";
import FivePage from "../pages/FivePage";
import AppNavbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App() {
  const step = useSelector((s) => s.user.step);

  let PageComponent = null;
  if (step === 1) PageComponent = <FirstPage />;
  if (step === 2) PageComponent = <SecondPage />;
  if (step === 3) PageComponent = <ThirdPage />;
  if (step === 4) PageComponent = <FourPage />;
  if (step === 5) PageComponent = <FivePage />;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppNavbar />
      <main style={{ flex: 1, padding: 30, overflow: "auto" }}>{PageComponent}</main>
      <Footer />
    </div>
  );
}
