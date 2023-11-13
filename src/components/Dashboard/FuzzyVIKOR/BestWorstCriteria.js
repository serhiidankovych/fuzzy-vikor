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

import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";

export default function BestWorstCriteria({
  names,
  bestWorstCriteria,
  optimization,
}) {
  const BestWorstCriteriaValues = names.criteriaNames?.map(
    (criteriaName, criteriaIndex) => {
      const itemId = `c${criteriaIndex + 1}`;
      console.log(bestWorstCriteria);
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
              {bestWorstCriteria[itemId].best
                ?.map((number) => number.toFixed(2))
                .join(", ")}
            </div>
          </TableCell>
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
              {bestWorstCriteria[itemId].worst
                ?.map((number) => number.toFixed(2))
                .join(", ")}
            </div>
          </TableCell>
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
              {optimization[itemId] === "Max" ? (
                <IoTrendingUp />
              ) : (
                <IoTrendingDown />
              )}
            </div>
          </TableCell>
        </TableRow>
      );
      return criterionCells;
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
      <Typography variant="h5">
        Best and worst values for each criterion{" "}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Criteria</TableCell>
              <TableCell align="center">Best</TableCell>
              <TableCell align="center">Worst</TableCell>
              <TableCell align="center">Optimization</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{BestWorstCriteriaValues}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
