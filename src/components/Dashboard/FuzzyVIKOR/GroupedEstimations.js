import React from "react";

import Box from "@mui/material/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import { useSelector } from "react-redux";

export default function GroupedEstimations({
  groupedAlternativesEstimations,
  groupedCriteriaEstimations,
}) {
  const names = useSelector((state) => state.nameConfiguration);

  const alternativesLinguisticTerms = useSelector(
    (state) => state.alternativeConfiguration
  );
  console.log(groupedAlternativesEstimations);
  console.log(groupedCriteriaEstimations);
  const [isDetailsShown, setIsDetailsShown] = React.useState(false);

  const GroupedAlternativesEstimations = names.alternativeNames.map(
    (alternativeName, alternativeIndex) => {
      const criterionCells = names.criteriaNames.map(
        (criteriaName, criteriaIndex) => {
          const itemId = `a${alternativeIndex + 1}-c${criteriaIndex + 1}`;

          const linguisticTerms = groupedAlternativesEstimations[
            itemId
          ]?.linguisticTermsId.map((estimation, estimationIndex) => (
            <div
              key={estimationIndex}
              style={{
                textAlign: "center",
                padding: "5px",
                border: "1px solid #51454f",
                backgroundColor: "#f700c6",
                margin: "3px",
                borderRadius: "5px",
              }}
            >
              {
                names.linguisticTermsForAlternativesNames[
                  estimation.linguisticTermId
                ]
              }
            </div>
          ));

          return (
            <TableCell
              key={criteriaIndex}
              align="center"
              sx={{ minWidth: "115px" }}
            >
              {linguisticTerms}
            </TableCell>
          );
        }
      );

      return (
        <TableRow key={alternativeIndex}>
          <TableCell align="center" sx={{ minWidth: "115px" }}>
            {alternativeName}
          </TableCell>
          {criterionCells}
        </TableRow>
      );
    }
  );

  const GroupedCriteriaEstimations = names.criteriaNames.map(
    (criteriaName, criteriaIndex) => {
      const criterionCells = names.expertNames.map(
        (expertName, expertIndex) => {
          const itemId = `c${criteriaIndex + 1}`;

          const linguisticTerms = (
            <div
              style={{
                textAlign: "center",
                padding: "5px",
                border: "1px solid #51454f",
                backgroundColor: "#f700c6",
                margin: "3px",
                borderRadius: "5px",
              }}
            >
              {
                names.linguisticTermsForCriteriaNames[
                  groupedCriteriaEstimations[itemId]?.linguisticTermsId[
                    expertIndex
                  ].linguisticTermId
                ]
              }
            </div>
          );

          return (
            <TableCell
              key={expertIndex}
              align="center"
              sx={{ minWidth: "115px" }}
            >
              {linguisticTerms}
            </TableCell>
          );
        }
      );

      return (
        <TableRow key={criteriaIndex}>
          <TableCell align="center" sx={{ minWidth: "115px" }}>
            {criteriaName}
          </TableCell>
          {criterionCells}
        </TableRow>
      );
    }
  );

  const GroupedAlternativesEstimationsConfines = names.alternativeNames.map(
    (alternativeName, alternativeIndex) => {
      const criterionCells = names.criteriaNames.map(
        (criteriaName, criteriaIndex) => {
          const itemId = `a${alternativeIndex + 1}-c${criteriaIndex + 1}`;

          const linguisticTerms = groupedAlternativesEstimations[
            itemId
          ]?.linguisticTermsId.map((estimation, estimationIndex) => (
            <div
              key={estimationIndex}
              style={{
                textAlign: "center",
                padding: "5px",
                border: "1px solid #51454f",
                backgroundColor: "#f700c6",
                margin: "3px",
                borderRadius: "5px",
              }}
            >
              [
              {alternativesLinguisticTerms.alternativeLinguisticTerms[
                estimation.linguisticTermId
              ].normalizedConfines
                .map((number) => number.toFixed(2))
                .join(", ")}
              ]
            </div>
          ));

          return (
            <TableCell
              key={criteriaIndex}
              align="center"
              sx={{ minWidth: "115px" }}
            >
              {linguisticTerms}
            </TableCell>
          );
        }
      );

      return (
        <TableRow key={alternativeIndex}>
          <TableCell align="center" sx={{ minWidth: "115px" }}>
            {alternativeName}
          </TableCell>
          {criterionCells}
        </TableRow>
      );
    }
  );

  return (
    <Box
      component={Paper}
      sx={{
        p: 1.5,
        border: "1px solid #51454f",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "flex-start",
        marginTop: "20px",
      }}
    >
      <Typography variant="h5">Grouped alternatives estimations</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          flexWrap: "wrap",
          paddingLeft: "8px",
        }}
      ></Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Alternatives</TableCell>

              {names.criteriaNames.map((criteriaName, criteriaIndex) => (
                <TableCell align="center" key={criteriaIndex}>
                  {criteriaName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{GroupedAlternativesEstimations}</TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5"> Grouped criteria estimations</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Criteria</TableCell>
              {names.expertNames.map((expertName, expertIndex) => (
                <TableCell align="center" key={expertIndex}>
                  {expertName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{GroupedCriteriaEstimations}</TableBody>
        </Table>
      </TableContainer>
      {isDetailsShown && (
        <>
          <Typography variant="h6">Triangular form</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Alternatives</TableCell>

                  {names.criteriaNames.map((criteriaName, criteriaIndex) => (
                    <TableCell align="center" key={criteriaIndex}>
                      {criteriaName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>{GroupedAlternativesEstimationsConfines}</TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      <Button
        color="green"
        startIcon={isDetailsShown ? <IoChevronUp /> : <IoChevronDown />}
        onClick={() => setIsDetailsShown((prev) => !prev)}
      >
        {isDetailsShown ? "Hide" : "Show"} details
      </Button>
    </Box>
  );
}
