import React from "react";
import Start from "./Start/Start";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Setup from "./Setup/Setup";

import { ToastContainer, toast } from "react-toastify";
import ExpertsEstimations from "./ExpertsEstimations/ExpertsEstimations";

export default function Dashboard() {
  const [isSetupOpen, setIsSetupOpen] = React.useState(false);
  const [isSetupFinised, setIsSetupFinised] = React.useState(false);
  const handleDisplaySetup = () => {
    setIsSetupOpen((prev) => !prev);
  };

  const [isDatasetNotUsed, setIsDatasetNotUsed] = React.useState(true);

  return (
    <>
      <Header handleDisplaySetup={handleDisplaySetup} />
      <Start handleDisplaySetup={handleDisplaySetup} />
      {isSetupFinised && <ExpertsEstimations />}

      <Setup
        isDatasetNotUsed={isDatasetNotUsed}
        setIsDatasetNotUsed={setIsDatasetNotUsed}
        isSetupOpen={isSetupOpen}
        setIsSetupOpen={setIsSetupOpen}
        setIsSetupFinised={setIsSetupFinised}
      />
      <Footer />
      <ToastContainer />
    </>
  );
}
