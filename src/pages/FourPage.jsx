import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setData } from "../States/UserSlice";
import { Box, Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";

export default function PageFour() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(s => s.user);

  const isValid = user.maritalStatus &&
    (user.maritalStatus === "single" || user.spouseName);

  return (
    <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box style={{ textAlign: "center", marginBottom: "50px" }}>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          My name is <span style={{ color: "#FF6633", fontWeight: "bold" }}>{user.firstName}</span>
        </p>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          And I am <span style={{ color: "#FF6633", fontWeight: "bold" }}>{user.gender}</span> of{" "}
          <span style={{ color: "#FF6633", fontWeight: "bold" }}>{user.age}</span> years old.
        </p>
      </Box>

      
      <h1 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", marginBottom: "40px" }}>
        Are you married?
      </h1>

      
      <Box style={{ width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box>
          <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "12px" }}>Martial Status</label>
          <Box style={{ display: "flex", gap: "10px" }}>
            <Button
              onClick={() => dispatch(setData({ maritalStatus: "single" }))}
              style={{
                flex: 1,
                padding: "10px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                background: user.maritalStatus === "single" ? "#FF6633" : "#f0f0f0",
                color: user.maritalStatus === "single" ? "#fff" : "#000",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              
            </Button>
            <Button
              onClick={() => dispatch(setData({ maritalStatus: "married" }))}
              style={{
                flex: 1,
                padding: "10px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                background: user.maritalStatus === "married" ? "#FF6633" : "#f0f0f0",
                color: user.maritalStatus === "married" ? "#fff" : "#000",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              
            </Button>
          </Box>
        </Box>
        
        {user.maritalStatus === "married" && (
          <Box>
            <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "8px" }}>My wife is</label>
            <TextField
              fullWidth
              placeholder=""
              value={user.spouseName}
              onChange={e => dispatch(setData({ spouseName: e.target.value }))}
              InputProps={{ startAdornment: <PersonIcon style={{ marginRight: "10px", color: "#999" }} /> }}
              style={{ height: "44px" }}
            />
          </Box>
        )}
      </Box>

      
      <Button
        disabled={!isValid}
        onClick={() => navigate("/page5")}
        style={{
          marginTop: "50px",
          padding: "12px 30px",
          fontSize: "16px",
          fontWeight: "bold",
          background: "#FF6633",
          color: "#fff",
          textTransform: "none",
          borderRadius: "25px",
          opacity: isValid ? 1 : 0.6
        }}
      >
        Next →
      </Button>
    </Box>
  );
}