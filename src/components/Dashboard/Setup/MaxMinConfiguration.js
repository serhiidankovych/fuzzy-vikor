import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  FormControl,
} from "@mui/material";

import { IoArrowForward, IoArrowBackOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { setMaxMinConfiguration } from "../../../store/actions/maxMinConfigurationActions";

export default function MaxMinConfiguration({ handleSetupStep }) {
  const dispatch = useDispatch();
  const maxMin = useSelector((state) => state.maxMinConfiguration);

  const criteriaLinguisticTerms = useSelector(
    (state) => state.criteriaConfiguration
  );

  const names = useSelector((state) => state.nameConfiguration);

  const [selectedItems, setSelectedItems] = React.useState(maxMin.maxMin || {});

  const [linguisticTerms, setLinguisticTerms] = React.useState(
    criteriaLinguisticTerms.criteriaLinguisticTerms || {}
  );

  useEffect(() => {
    setLinguisticTerms(criteriaLinguisticTerms.criteriaLinguisticTerms);
  }, [criteriaLinguisticTerms]);

  useEffect(() => {
    // Iterate over selectedItems and update the linguisticTerm based on the updated linguisticTerms
    const updatedSelectedItems = {};
    Object.keys(selectedItems).forEach((itemId) => {
      const currentItem = selectedItems[itemId];
      const updatedOption = linguisticTerms.find(
        (option) => option.id === currentItem.id
      );
      updatedSelectedItems[itemId] = updatedOption || currentItem;
    });
    setSelectedItems(updatedSelectedItems);
  }, [linguisticTerms]);

  const handleSetMaxMin = () => {
    dispatch(setMaxMinConfiguration(selectedItems));
    handleSetupStep(true);
  };

  const handleSelectChange = (event, id) => {
    const { value } = event.target;

    const updatedSelectedItems = { ...selectedItems };
    updatedSelectedItems[id] = value; // Store the entire selected option object.

    setSelectedItems(updatedSelectedItems);
  };

  const maxMinData = [
    { id: 1, function: "Max" },
    { id: 2, function: "Min" },
  ];

  const MenuItems = names.criteriaNames.map((criteriaName, criteriaIndex) => {
    const itemId = `c${criteriaIndex + 1}`;
    return (
      <TableRow key={`${criteriaIndex}`}>
        <TableCell>{criteriaName}</TableCell>
        <TableCell>
          <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
            <Select
              value={selectedItems[itemId] || ""}
              onChange={(event) => handleSelectChange(event, itemId)}
            >
              {maxMinData.map((option) => (
                <MenuItem key={option.id} value={option.function}>
                  {option.function}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Box
      sx={{
        p: 1.5,
        border: "1px solid #51454f",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography variant="h6">Provide optimization</Typography>
      <TableContainer sx={{ border: "1px solid #51454f", borderRadius: "8px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Criteria</TableCell>
              <TableCell align="center">Optimization</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{MenuItems}</TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="green"
          onClick={() => handleSetupStep(false)}
          startIcon={<IoArrowBackOutline />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="green"
          onClick={handleSetMaxMin}
          endIcon={<IoArrowForward />}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
