import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { IoCloseCircleOutline } from "react-icons/io5";

import NumbersConfiguration from "./NumbersConfiguration";
import NamesConfiguration from "./NamesConfiguration";
import CriteriaConfiguration from "./CriteriaConfiguration";
import AlternativeConfiguration from "./AlternativeConfiguration";
import CriteriaEstimationConfiguration from "./CriteriaEstimationConfiguration";
import OptimizationConfiguration from "./OptimizationConfiguration";

export default function Setup({
  isSetupOpen,
  setIsSetupOpen,
  setIsSetupFinised,
  setIsDatasetNotUsed,
  isDatasetNotUsed,
  setIsNumbersSet,
  isNumbersSet,
  setIsNamesSet,
  isNamesSet,
}) {
  const [setupStep, setSetupStep] = React.useState(0);

  const handleSetupStep = (step) => {
    if (step) {
      setSetupStep(setupStep + 1);
    } else {
      setSetupStep(setupStep - 1);
    }
  };

  const setupMenu = (step) => {
    const steps = {
      0: (
        <NumbersConfiguration
          handleSetupStep={handleSetupStep}
          setIsSetupFinised={setIsSetupFinised}
          setIsDatasetNotUsed={setIsDatasetNotUsed}
          isDatasetNotUsed={isDatasetNotUsed}
          setIsNumbersSet={setIsNumbersSet}
          setIsNamesSet={setIsNamesSet}
        />
      ),
      1: (
        <NamesConfiguration
          handleSetupStep={handleSetupStep}
          isDatasetNotUsed={isDatasetNotUsed}
          setIsNamesSet={setIsNamesSet}
          isNamesSet={isNamesSet}
        />
      ),
      2: (
        <OptimizationConfiguration
          handleSetupStep={handleSetupStep}
          isDatasetNotUsed={isDatasetNotUsed}
        />
      ),
      3: (
        <AlternativeConfiguration
          handleSetupStep={handleSetupStep}
          isDatasetNotUsed={isDatasetNotUsed}
        />
      ),
      4: (
        <CriteriaConfiguration
          handleSetupStep={handleSetupStep}
          isDatasetNotUsed={isDatasetNotUsed}
        />
      ),
      5: (
        <CriteriaEstimationConfiguration
          handleSetupStep={handleSetupStep}
          setIsSetupFinised={setIsSetupFinised}
          isDatasetNotUsed={isDatasetNotUsed}
          setIsSetupOpen={setIsSetupOpen}
        />
      ),
    };
    return steps[step];
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsSetupOpen(open);
  };
  const list = () => (
    <Box
      sx={{
        width: "333px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
      role="presentation"
    >
      <IconButton
        sx={{
          position: "absolute",
          right: "20px",
        }}
        onClick={() => setIsSetupOpen(false)}
      >
        <IoCloseCircleOutline />
      </IconButton>
      {setupMenu(setupStep)}
    </Box>
  );
  return (
    <Drawer
      anchor="right"
      open={isSetupOpen}
      onClose={toggleDrawer(false)}
      sx={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      {list()}
    </Drawer>
  );
}
