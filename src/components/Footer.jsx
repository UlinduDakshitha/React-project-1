import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <footer style={{ padding: 15, background: "transparent", color: "#222" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" gap={2} style={{ marginLeft: "20px" }}>
          <IconButton><FacebookIcon /></IconButton>
          <IconButton><InstagramIcon /></IconButton>
          <IconButton><LinkedInIcon /></IconButton>
          <IconButton><TwitterIcon /></IconButton>
        </Box>
        <span style={{ color: "#888", marginRight: "20px" }}>Find your needs</span>
      </Box>
    </footer>
  );
}