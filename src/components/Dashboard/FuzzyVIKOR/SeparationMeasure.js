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

import { renderLinguisticTerms } from "../../../utils/linguisticTermsUtils";
export default function SeparationMeasure({ separationMeasures, names }) {
  const SeparationMeasureSum = Object.values(separationMeasures.sum)?.map(
    (measure, measureIndex) => {
      return (
        <TableCell align="center" key={measureIndex}>
          {renderLinguisticTerms(measure)}
        </TableCell>
      );
    }
  );
  const SeparationMeasureMax = Object.values(separationMeasures.max)?.map(
    (measure, measureIndex) => {
      return (
        <TableCell align="center" key={measureIndex}>
          {renderLinguisticTerms(measure)}
        </TableCell>
      );
    }
  );

  const SeparationMeasureValues = (
    <>
      <TableRow>
        <TableCell align="center">Weighted sum(S)</TableCell>
        {SeparationMeasureSum}
      </TableRow>
      <TableRow>
        <TableCell align="center">Weighted max(R)</TableCell>
        {SeparationMeasureMax}
      </TableRow>
    </>
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
      <Typography variant="h5">Separation measures</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Measures</TableCell>
              {names.alternativeNames?.map((measure, measureIndex) => (
                <TableCell key={measureIndex} align="center">
                  {measure}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{SeparationMeasureValues}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
