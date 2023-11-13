import React from "react";
import Start from "./Start/Start";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Setup from "./Setup/Setup";
import FuzzyVIKOR from "./FuzzyVIKOR/FuzzyVIKOR";

import { ToastContainer, toast } from "react-toastify";
import ExpertsEstimations from "./ExpertsEstimations/ExpertsEstimations";

export default function Dashboard() {
  const [isSetupOpen, setIsSetupOpen] = React.useState(false);
  const [isSetupFinised, setIsSetupFinised] = React.useState(false);
  const [isExpertsEstimationsSet, setIsExpertsEstimationsSet] =
    React.useState(false);
  const [isExpertsEstimationsOpen, setIsExpertsEstimationsOpen] =
    React.useState(false);
  const handleDisplaySetup = () => {
    setIsSetupOpen((prev) => !prev);
  };

  const [isDatasetNotUsed, setIsDatasetNotUsed] = React.useState(true);

  const expertEstimationsRef = React.useRef(null);
  const scrollToComponent = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <Header handleDisplaySetup={handleDisplaySetup} />
      <Start handleDisplaySetup={handleDisplaySetup} />
      {isExpertsEstimationsOpen && (
        <ExpertsEstimations
          ref={expertEstimationsRef}
          setIsExpertsEstimationsSet={setIsExpertsEstimationsSet}
          isSetupFinised={isSetupFinised}
        />
      )}

      {isExpertsEstimationsSet && <FuzzyVIKOR />}

      <Setup
        isDatasetNotUsed={isDatasetNotUsed}
        setIsDatasetNotUsed={setIsDatasetNotUsed}
        isSetupOpen={isSetupOpen}
        setIsSetupOpen={setIsSetupOpen}
        setIsSetupFinised={setIsSetupFinised}
        scrollToComponent={scrollToComponent}
        expertEstimationsRef={expertEstimationsRef}
        setIsExpertsEstimationsOpen={setIsExpertsEstimationsOpen}
      />
      <Footer />
      <ToastContainer />
    </>
  );
}
