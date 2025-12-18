import logo from "../assets/UA LOGO TRANSPARENT 1.png";
import Chip from '@mui/material/Chip';

export default function AppNavbar() {
  return (
    <nav style={{ padding: 15, background: "#fff", color: "#222", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <img src={logo} alt="UA Logo" style={{ height: 40 }} />
      <Chip label="Already have a account" variant="outlined" style={{ marginRight: "20px", borderColor: "#C8102E", color: "#C8102E" }} />
    </nav>
  );
}