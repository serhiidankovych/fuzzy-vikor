import React from "react";
import Start from "./Start/Start";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Setup from "./Setup/Setup";

import { ToastContainer, toast } from "react-toastify";

export default function Dashboard() {
  const [isSetupOpen, setIsSetupOpen] = React.useState(true);
  const handleDisplaySetup = () => {
    setIsSetupOpen((prev) => !prev);
  };

  const [isSetupFinised, setIsSetupFinised] = React.useState(false);
  const [isDatasetNotUsed, setIsDatasetNotUsed] = React.useState(true);
  const [isResultsShown, setIsResultsShown] = React.useState(false);
  const [isNumbersSet, setIsNumbersSet] = React.useState(false);
  const [isNamesSet, setIsNamesSet] = React.useState(false);

  return (
    <>
      <Header handleDisplaySetup={handleDisplaySetup} />
      <Start handleDisplaySetup={handleDisplaySetup} />
      <Setup
        isDatasetNotUsed={isDatasetNotUsed}
        setIsDatasetNotUsed={setIsDatasetNotUsed}
        isSetupOpen={isSetupOpen}
        setIsSetupOpen={setIsSetupOpen}
        setIsSetupFinised={setIsSetupFinised}
        setIsNumbersSet={setIsNumbersSet}
        isNumbersSet={isNumbersSet}
        setIsNamesSet={setIsNamesSet}
        isNamesSet={isNamesSet}
      />
      <Footer />
      <ToastContainer />
    </>
  );
}
