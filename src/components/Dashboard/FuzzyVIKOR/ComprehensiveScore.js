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
export default function ComprehensiveScore({ comprehensiveScore, names }) {
  const Score = Object.values(comprehensiveScore)?.map(
    (measure, measureIndex) => {
      return (
        <TableCell align="center" key={measureIndex}>
          {renderLinguisticTerms(measure)}
        </TableCell>
      );
    }
  );

  const ComprehensiveScoreValues = (
    <TableRow>
      <TableCell align="center">Comprehensive score(Q)</TableCell>
      {Score}
    </TableRow>
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
      <Typography variant="h5">Comprehensive score</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Scores</TableCell>
              {names.alternativeNames?.map((measure, measureIndex) => (
                <TableCell key={measureIndex} align="center">
                  {measure}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{ComprehensiveScoreValues}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
