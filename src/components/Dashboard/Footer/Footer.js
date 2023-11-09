import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";

import { BsGithub } from "react-icons/bs";
export default function Footer() {
  const redirectToGitHub = () => {
    const githubUrl = "https://github.com/serhiidankovych/fuzzy-vikor";

    window.open(githubUrl, "_blank");
  };
  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        padding: "20px",
        marginBottom: "0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        aria-label="menu"
        color="green"
        size="large"
        onClick={redirectToGitHub}
      >
        <BsGithub />
      </IconButton>
      <Box flexGrow={1}>
        <Typography
          gutterBottom
          align="left"
          sx={{ margin: "0px" }}
          color="textSecondary"
          fontFamily={"Inconsolata"}
        >
          Copyright (c) {new Date().getFullYear()}
        </Typography>
        <Typography
          color="textSecondary"
          fontFamily={"Inconsolata"}
          align="left"
        >
          DANKOVYCH SERHII
        </Typography>
      </Box>
    </Box>
  );
}
