import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Slider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { useState } from "react";
import MyDetailsHeader from "../components/MyDetailsHeader";

export default function PageFive() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const u = useSelector(s => s.user);
  const [numKids, setNumKids] = useState(2);
  const [kids, setKids] = useState([
    { name: "", age: 5 },
    { name: "", age: 2 }
  ]);

  const handleKidsChange = (value) => {
    setNumKids(value);
    const newKids = [...kids];
    if (value > kids.length) {
      for (let i = kids.length; i < value; i++) {
        newKids.push({ name: "", age: "" });
      }
    } else {
      newKids.splice(value);
    }
    setKids(newKids);
  };

  const updateKid = (index, field, value) => {
    const newKids = [...kids];
    newKids[index] = { ...newKids[index], [field]: value };
    setKids(newKids);
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box style={{ textAlign: "center", marginBottom: "40px" }}>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          My name is <span style={{ color: "#FF6633", fontWeight: "bold" }}>{u.firstName}</span>
        </p>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          And I am <span style={{ color: "#FF6633", fontWeight: "bold" }}>{u.gender}</span> of{" "}
          <span style={{ color: "#FF6633", fontWeight: "bold" }}>{u.age}</span> years old.
        </p>
        {u.maritalStatus === "married" && (
          <p style={{ fontSize: "18px", margin: "10px 0" }}>
            I am <span style={{ color: "#FF6633", fontWeight: "bold" }}>married</span> to{" "}
            <span style={{ color: "#FF6633", fontWeight: "bold" }}>{u.spouseName}</span>.
          </p>
        )}
      </Box>

      
      <h1 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>
        I have (kids)
      </h1>

      
      <Box style={{ width: "100%", maxWidth: "400px", marginBottom: "20px" }}>
        <Slider
          value={numKids}
          onChange={(e, value) => handleKidsChange(value)}
          min={0}
          max={5}
          step={1}
          marks
          valueLabelDisplay="on"
          style={{ color: "#FF6633" }}
        />
      </Box>

      
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>they are</p>

      
      <Box style={{ width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px", marginBottom: "30px" }}>
        {kids.map((kid, index) => (
          <Box key={index} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box style={{ flex: 1 }}>
              <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "8px" }}>My kid is</label>
              <TextField
                fullWidth
                placeholder="Name"
                value={kid.name}
                onChange={e => updateKid(index, "name", e.target.value)}
                InputProps={{ startAdornment: <ChildCareIcon style={{ marginRight: "10px", color: "#999" }} /> }}
                style={{ height: "44px" }}
              />
            </Box>
            <Box style={{ width: "150px" }}>
              <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "8px" }}>he/she is</label>
              <Box style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <TextField
                  type="number"
                  value={kid.age}
                  onChange={e => updateKid(index, "age", e.target.value)}
                  style={{ width: "70px", height: "44px" }}
                />
                <span style={{ color: "#999", fontSize: "14px" }}>years old</span>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      
      <Button
        onClick={() => navigate("/page6")}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          fontSize: "16px",
          fontWeight: "bold",
          background: "#FF6633",
          color: "#fff",
          textTransform: "none",
          borderRadius: "25px"
        }}
      >
        Next →
      </Button>
    </Box>
  );
}