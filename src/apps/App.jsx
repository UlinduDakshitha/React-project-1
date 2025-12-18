 import { useSelector } from "react-redux";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";


export default function App() {
const step = useSelector(s => s.user.step);


if (step === 1) return <PageOne />;
if (step === 2) return <PageTwo />;
if (step === 3) return <PageThree />;
if (step === 4) return <PageFour />;
if (step === 5) return <PageFive />;
return null;
}
