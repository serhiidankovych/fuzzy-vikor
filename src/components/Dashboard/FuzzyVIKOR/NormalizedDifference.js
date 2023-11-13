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

export default function NormalizedDifference({
  names,

  normalizedFuzzyDifference,
}) {
  const NormalizedFuzzyDifference = names.alternativeNames.map(
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
              {normalizedFuzzyDifference[itemId]
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
      <Typography variant="h5">Normalized fuzzy difference</Typography>

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
          <TableBody>{NormalizedFuzzyDifference}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
