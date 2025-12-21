import { useNavigate } from "react-router-dom";
import secondImage from "../assets/2nd Image.png";

export default function PageTwo() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "80vh", padding: "0 60px", position: "relative" }}>
      <div style={{ flex: 1, textAlign: "left" }}>
        <h1 style={{ fontSize: "60px", fontWeight: "bold", margin: "0", color: "#000" }}>Life Insurance</h1>
        <h2 style={{ fontSize: "60px", fontWeight: "bold", margin: "10px 0 30px 0", color: "#000" }}>Made Simple</h2>
        <p style={{ fontSize: "16px", color: "#666", margin: "20px 0 30px 0", maxWidth: "500px", lineHeight: "1.5" }}>Find your goals and plan your future</p>
        <button onClick={() => navigate("/page3")} style={{ padding: "12px 25px", fontSize: "16px", fontWeight: "bold", background: "#FF6633", color: "#fff", border: "none", borderRadius: "25px", cursor: "pointer", marginTop: "10px" }}>Get Started →</button>
      </div>
       <div style={{ position: "absolute", top: "50%", right: "0", width: "45%", maxHeight: "90%", display: "flex", alignItems: "center", justifyContent: "flex-end", overflow: "hidden", transform: "translateY(-50%)", marginRight: "-40px" }}>
               <img src={secondImage} alt="Consultant Card" style={{ maxWidth: "100%", height: "auto", display: "block", objectFit: "contain" }} />
      </div>
    </div>
  );
}