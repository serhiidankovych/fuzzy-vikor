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

export default function SyntheticMeasure({
  names,
  fuzzyCriteriaSyntheticMeasure,
  fuzzyAlternativesSyntheticMeasure,
}) {
  const FuzzyCriteriaSyntheticMeasure = names.criteriaNames?.map(
    (criteriaName, criteriaIndex) => {
      const itemId = `c${criteriaIndex + 1}`;

      const criterionCells = (
        <TableRow key={criteriaIndex}>
          <TableCell align="center">{criteriaName}</TableCell>
          <TableCell align="center">
            <div
              style={{
                textAlign: "center",
                padding: "5px",
                border: "1px solid #51454f",
                backgroundColor: "#232222",
                margin: "3px",
                borderRadius: "5px",
              }}
            >
              {fuzzyCriteriaSyntheticMeasure[itemId]
                ?.map((number) => number.toFixed(2))
                .join(", ")}
            </div>
          </TableCell>
        </TableRow>
      );
      return criterionCells;
    }
  );

  const FuzzyAlternativesSyntheticMeasure = names.alternativeNames.map(
    (alternativeName, alternativeIndex) => {
      const criterionCells = names.criteriaNames?.map(
        (criteriaName, criteriaIndex) => {
          const itemId = `a${alternativeIndex + 1}-c${criteriaIndex + 1}`;

          const linguisticTerms = (
            <div
              key={itemId}
              style={{
                textAlign: "center",
                padding: "5px",
                border: "1px solid #51454f",
                backgroundColor: "#232222",
                margin: "3px",
                borderRadius: "5px",
              }}
            >
              {fuzzyAlternativesSyntheticMeasure[itemId]
                ?.map((number) => number.toFixed(2))
                .join(", ")}
            </div>
          );

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
    <>
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
        <Typography variant="h5">
          Fuzzy alternatives synthetic measure
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Alternatives</TableCell>
                {names.criteriaNames?.map((criteriaName, criteriaIndex) => (
                  <TableCell align="center" key={criteriaIndex}>
                    {criteriaName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{FuzzyAlternativesSyntheticMeasure}</TableBody>
          </Table>
        </TableContainer>
      </Box>

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
        <Typography variant="h5">Criteria weight importance</Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Criteria</TableCell>

                <TableCell align="center">Weigth</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{FuzzyCriteriaSyntheticMeasure}</TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
