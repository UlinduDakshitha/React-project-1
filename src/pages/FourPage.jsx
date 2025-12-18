import { useDispatch, useSelector } from "react-redux";
import { setData, nextStep } from "../States/UserSlice";

export default function PageFour() {
  const dispatch = useDispatch();
  const user = useSelector(s => s.user);
  if (user.step !== 4) return null;

  const isValid = user.maritalStatus &&
    (user.maritalStatus === "single" || user.spouseName);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "80vh", padding: "0 60px", position: "relative" }}>
      <div style={{ flex: 1, textAlign: "left" }}>
        <h1 style={{ fontSize: "60px", fontWeight: "bold", margin: "0", color: "#000" }}>Life Insurance</h1>
        <h2 style={{ fontSize: "60px", fontWeight: "bold", margin: "10px 0 30px 0", color: "#000" }}>Made Simple</h2>
        <p style={{ fontSize: "16px", color: "#666", margin: "20px 0 30px 0", maxWidth: "500px", lineHeight: "1.5" }}>Find your goals and plan your future</p>
        <button onClick={() => dispatch(nextStep())} disabled={!isValid} style={{ padding: "12px 25px", fontSize: "16px", fontWeight: "bold", background: "#FF6633", color: "#fff", border: "none", borderRadius: "25px", cursor: "pointer", marginTop: "10px", opacity: isValid ? 1 : 0.6 }}>Get Started →</button>
      </div>
    </div>
  );
}