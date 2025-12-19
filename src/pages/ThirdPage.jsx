import { useDispatch, useSelector } from "react-redux";
import { setData, nextStep } from "../States/UserSlice";
import { Box, TextField, Select, MenuItem, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MyDetailsHeader from "../components/MyDetailsHeader";

export default function PageThree() {
  const dispatch = useDispatch();
  const user = useSelector(s => s.user);
  if (user.step !== 3) return null;

  const isValid = user.firstName && user.lastName && user.dob;

  const handleNext = () => {
    const birthYear = new Date(user.dob).getFullYear();
    const age = new Date().getFullYear() - birthYear;
    const gender = user.firstName.toLowerCase().endsWith("a") ? "female" : "male";

    dispatch(setData({ age, gender }));
    dispatch(nextStep());
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", minHeight: "80vh" }}>
      <MyDetailsHeader step="3/5" />
      
      <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flex: 1, padding: "40px" }}>
        {/* Title */}
        <h1 style={{ fontSize: "48px", fontWeight: "bold", textAlign: "center", maxWidth: "600px", marginBottom: "50px", lineHeight: "1.2" }}>
          Let's get started by telling a little bit about yourself
        </h1>

        {/* Form */}
        <Box style={{ width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* First Name with Title Dropdown */}
          <Box>
            <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "8px" }}>First Name</label>
            <Box style={{ display: "flex", gap: "10px" }}>
              <Select value="Mr" style={{ width: "100px", height: "44px" }}>
                <MenuItem value="Mr">Mr.</MenuItem>
                <MenuItem value="Ms">Ms.</MenuItem>
              </Select>
              <TextField
                fullWidth
                placeholder="Arjuna"
                value={user.firstName}
                onChange={e => dispatch(setData({ firstName: e.target.value }))}
                InputProps={{ startAdornment: <PersonIcon style={{ marginRight: "10px", color: "#999" }} /> }}
                style={{ height: "44px" }}
              />
            </Box>
          </Box>

          {/* Last Name */}
          <Box>
            <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "8px" }}>Last name</label>
            <TextField
              fullWidth
              placeholder="Indrajith"
              value={user.lastName}
              onChange={e => dispatch(setData({ lastName: e.target.value }))}
              InputProps={{ startAdornment: <PersonIcon style={{ marginRight: "10px", color: "#999" }} /> }}
              style={{ height: "44px" }}
            />
          </Box>

          {/* Date of Birth */}
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

        {/* Next Button */}
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