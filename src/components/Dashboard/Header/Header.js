import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { IoMenu } from "react-icons/io5";

export default function Header({ handleDisplaySetup }) {
  return (
    <Box sx={{ margin: "10px" }}>
      <AppBar
        position="static"
        sx={{
          flexDirection: "row",
          borderRadius: "15px",
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
