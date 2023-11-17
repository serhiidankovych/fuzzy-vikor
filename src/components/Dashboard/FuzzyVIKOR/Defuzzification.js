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
  FormControl,
  MenuItem,
  Button,
  Select,
} from "@mui/material";

export default function Defuzzification({ defuzzification, names }) {
  const [defuzzificationMethod, setDefuzzificationMethod] =
    React.useState("Centroid Method");

  const handleChange = (event) => {
    setDefuzzificationMethod(event.target.value);
  };

  const renderDefuzzificationValues = (defuzzifiedValues) => {
    return Object.values(defuzzifiedValues)?.map(
      (defuzzifiedValue, defuzzifiedValueIndex) => (
        <TableCell align="center" key={defuzzifiedValueIndex}>
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
            {`      ${defuzzifiedValue.toFixed(4)}      `}
          </div>
        </TableCell>
      )
    );
  };
  const DefuzzificationSum = renderDefuzzificationValues(
    defuzzification.defuzzifiedSum
  );
  const DefuzzificationMax = renderDefuzzificationValues(
    defuzzification.defuzzifiedMax
  );

  const DefuzzificationScore = renderDefuzzificationValues(
    defuzzification.defuzzifiedComprehensiveScore
  );

  const DefuzzificationValues = (
    <>
      <TableRow>
        <TableCell align="center">Defuzzified sum</TableCell>
        {DefuzzificationSum}
      </TableRow>

      <TableRow>
        <TableCell align="center">Defuzzified max</TableCell>
        {DefuzzificationMax}
      </TableRow>
      <TableRow>
        <TableCell align="center">Defuzzified score</TableCell>
        {DefuzzificationScore}
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h5">Defuzzification</Typography>
        <FormControl size="small">
          <Select
            value={defuzzificationMethod}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value={"Centroid Method"}>Centroid Method</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Defuzzified value</TableCell>
              {names.alternativeNames?.map(
                (defuzzifiedValue, defuzzifiedValueIndex) => (
                  <TableCell key={defuzzifiedValueIndex} align="center">
                    {defuzzifiedValue}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>{DefuzzificationValues}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
