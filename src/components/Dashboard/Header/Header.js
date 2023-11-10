import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { IoMenu } from "react-icons/io5";

export default function Header({ handleDisplaySetup }) {
  return (
    <Box sx={{ marginTop: "10px" }}>
      <AppBar
        position="fixed"
        sx={{
          background:
            " linear-gradient(135deg, rgba(31,31,31,0.8) 0%, rgba(18,18,18,0.8) 72%)",
          flexDirection: "row",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Typography
          variant="h5"
          color="textSecondary"
          sx={{
            fontWeight: "900",
            textAlign: "center",
            fontFamily: "Inconsolata",
            marginLeft: "20px",
          }}
        >
          vikor
        </Typography>

        <IconButton onClick={handleDisplaySetup} color="green">
          <IoMenu />
        </IconButton>
      </AppBar>
    </Box>
  );
}
