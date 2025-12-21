import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setData } from "../States/UserSlice";
import { Box, TextField, Select, MenuItem, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MyDetailsHeader from "../components/MyDetailsHeader";

export default function PageThree() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(s => s.user);

  const isValid = user.firstName && user.lastName && user.dob;

  const handleNext = () => {
    const birthYear = new Date(user.dob).getFullYear();
    const age = new Date().getFullYear() - birthYear;
    const gender = user.firstName.toLowerCase().endsWith("a") ? "female" : "male";

    dispatch(setData({ age, gender }));
    navigate("/page4");
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", minHeight: "80vh" }}>
      
      
      <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flex: 1, padding: "40px" }}>
        
        <h1 style={{ fontSize: "48px", fontWeight: "bold", textAlign: "center", maxWidth: "600px", marginBottom: "50px", lineHeight: "1.2" }}>
          Let's get started by telling a little bit about yourself
        </h1>

        <Box style={{ width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px" }}>
        
          <Box>
            <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "8px" }}>First Name</label>
            <Box style={{ display: "flex", gap: "10px" }}>
              <Select value="Mr" style={{ width: "100px", height: "44px" }}>
                <MenuItem value="Mr">Mr.</MenuItem>
                <MenuItem value="Ms">Ms.</MenuItem>
              </Select>
              <TextField
                fullWidth
                placeholder=""
                value={user.firstName}
                onChange={e => dispatch(setData({ firstName: e.target.value }))}
                InputProps={{ startAdornment: <PersonIcon style={{ marginRight: "10px", color: "#999" }} /> }}
                style={{ height: "44px" }}
              />
            </Box>
          </Box>

        
          <Box>
            <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "8px" }}>Last name</label>
            <TextField
              fullWidth
              placeholder=""
              value={user.lastName}
              onChange={e => dispatch(setData({ lastName: e.target.value }))}
              InputProps={{ startAdornment: <PersonIcon style={{ marginRight: "10px", color: "#999" }} /> }}
              style={{ height: "44px" }}
            />
          </Box>

         
          <Box>
            <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "8px" }}>My date of birth</label>
            <TextField
              fullWidth
              type="date"
              value={user.dob}
              onChange={e => dispatch(setData({ dob: e.target.value }))}
              InputProps={{ startAdornment: <PersonIcon style={{ marginRight: "10px", color: "#999" }} /> }}
              style={{ height: "44px" }}
            />
          </Box>
        </Box>

        <Button
          disabled={!isValid}
          onClick={handleNext}
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
    </Box>
  );
}