import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../States/UserSlice";
import firstImage from "../assets/1st Image.png";

export default function PageOne() {
  const dispatch = useDispatch();
  const step = useSelector(s => s.user.step);
  if (step !== 1) return null;

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "80vh", padding: "0 60px", position: "relative" }}>
      <div style={{ flex: 1, textAlign: "left" }}>
        <h1 style={{ fontSize: "60px", fontWeight: "bold", margin: "0", color: "#000" }}>Life Insurance</h1>
        <h2 style={{ fontSize: "60px", fontWeight: "bold", margin: "10px 0 30px 0", color: "#000" }}>Made Simple</h2>
        <p style={{ fontSize: "16px", color: "#666", margin: "20px 0 30px 0", maxWidth: "500px", lineHeight: "1.5" }}>Find your goals and plan your future</p>
        <button onClick={() => dispatch(nextStep())} style={{ padding: "12px 25px", fontSize: "16px", fontWeight: "bold", background: "#FF6633", color: "#fff", border: "none", borderRadius: "25px", cursor: "pointer", marginTop: "10px" }}>Get Started →</button>
      </div>
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "55%", height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end", overflow: "hidden" }}>
        <img src={firstImage} alt="Life Insurance" style={{ maxWidth: "100%", height: "100%", display: "block", objectFit: "cover" }} />
      </div>
    </div>
  );
}