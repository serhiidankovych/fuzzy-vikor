import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { IoMenu } from "react-icons/io5";

export default function Header({ handleDisplaySetup }) {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          flexDirection: "row",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          color="textSecondary"
          sx={{
            fontWeight: "900",
            textAlign: "center",
            fontFamily: "Inconsolata",
            flexGrow: 1, // Use flexGrow to center the Typography
          }}
        >
          fuzzy vikor
        </Typography>

        <IconButton onClick={handleDisplaySetup} color="green">
          <IoMenu />
        </IconButton>
      </AppBar>
    </Box>
  );
}
