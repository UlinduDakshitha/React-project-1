import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TuneIcon from "@mui/icons-material/Tune";

export default function MyDetailsHeader({ step }) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#f4f4f4",
        color: "#000",
      }}
    >
      <Toolbar sx={{ px: 1 }}>
       
        <IconButton edge="start">
          <ArrowBackIcon />
        </IconButton>

         
        <Typography
          sx={{
            flexGrow: 1,
            fontSize: "18px",
            fontWeight: 600,
            ml: 1,
          }}
        >
          My details
        </Typography>
 
        <IconButton edge="end">
          <TuneIcon />
        </IconButton>
        {step && (
          <Typography sx={{ fontSize: "14px", fontWeight: 600, ml: 1 }}>
            {step}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
}
