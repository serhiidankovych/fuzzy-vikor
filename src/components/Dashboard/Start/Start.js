import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import lendingImage from "../../../assets/lending.png";

function Start({ handleDisplaySetup }) {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "15px",
            height: "100vh",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "500px",
              alignItems: "flex-start",
              justifyContent: " center",
              textAlign: "justify",
              gap: "7px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Inconsolata",
                fontWeight: "900",
              }}
              color="textPrimary"
            >
              FUZZY VIKOR
            </Typography>

            <Typography color="textPrimary">
              The VIKOR method is a multi-criteria decision making method. VIKOR
              ranks alternatives and determines the solution named compromise
              that is the closest to the ideal.
            </Typography>
            <Typography color="textSecondary">by Serafim Opricovic</Typography>
            <Button
              variant="contained"
              color="green"
              endIcon={<IoArrowForwardCircleOutline />}
              onClick={handleDisplaySetup}
            >
              Get Started
            </Button>
          </Box>
          <img
            src={lendingImage}
            alt="lending"
            loading="lazy"
            style={{ maxWidth: " 100%", width: " 450px" }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Start;
