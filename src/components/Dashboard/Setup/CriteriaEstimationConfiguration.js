import React, { isValidElement, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
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
import { setCriteriaEstimationConfiguration } from "../../../store/actions/criteriaEstimationConfigurationActions";
import { showToastMessage } from "../../../utils/toastUtils";
export default function CriteriaEstimationConfiguration({
  handleSetupStep,
  setIsSetupFinised,
  setIsSetupOpen,
}) {
  const dispatch = useDispatch();
  const criteriaEstimation = useSelector(
    (state) => state.criteriaEstimationConfiguration
  );

  const criteriaLinguisticTerms = useSelector(
    (state) => state.criteriaConfiguration
  );

  const names = useSelector((state) => state.nameConfiguration);

  const [selectedItems, setSelectedItems] = React.useState(
    criteriaEstimation.criteriaEstimation || {}
  );

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

  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = React.useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentExpert = names.expertIndices.slice(startIndex, endIndex);

  const handleSetCriteriaEstimations = () => {
    const isValid = checkCriteriaEstimations(
      selectedItems,
      names,
      showToastMessage
    );
    if (isValid) {
      dispatch(setCriteriaEstimationConfiguration(selectedItems));
      setIsSetupFinised(true);
      setIsSetupOpen(false);
    }
  };
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const checkCriteriaEstimations = (selectedItems, names, showToastMessage) => {
    if (
      Object.keys(selectedItems).length ===
      names.expertNames.length * names.criteriaNames.length
    ) {
      return true;
    } else {
      showToastMessage("Please provide all criteria estimations", "error");

      return false;
    }
  };

  const handleSelectChange = (event, id) => {
    const { value } = event.target;
    const selectedOption = linguisticTerms.find(
      (option) => option.linguisticTerm === value
    );

    const updatedSelectedItems = { ...selectedItems };
    updatedSelectedItems[id] = selectedOption; // Store the entire selected option object.

    setSelectedItems(updatedSelectedItems);
  };

  const MenuItems = currentExpert.map((expertId, expertIndex) => {
    return names.criteriaNames.map((criteriaName, criteriaIndex) => {
      const itemId = `e${Number(expertId) + 1}-c${criteriaIndex + 1}`;

      return (
        <TableRow key={`${currentExpert}-${criteriaIndex}`}>
          <TableCell>{criteriaName}</TableCell>
          <TableCell>
            <FormControl sx={{ m: 1, width: 100 }} size="small">
              <Select
                value={
                  selectedItems[itemId] && selectedItems[itemId].linguisticTerm
                    ? selectedItems[itemId].linguisticTerm
                    : ""
                }
                onChange={(event) => handleSelectChange(event, itemId)}
              >
                {linguisticTerms.map((option) => (
                  <MenuItem key={option.id} value={option.linguisticTerm}>
                    {option.linguisticTerm}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </TableCell>
        </TableRow>
      );
    });
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
      <Typography variant="h6">Provide criteria estimations</Typography>
      <Typography variant="h6" fontFamily="Inconsolata" color="textSecondary">
        {names.expertNames[currentPage - 1]}
      </Typography>
      <TableContainer sx={{ border: "1px solid #51454f", borderRadius: "8px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Criteria</TableCell>
              <TableCell align="center">LT</TableCell>
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
      >
        <Pagination
          count={Math.ceil(names.expertNames.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>

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
          onClick={handleSetCriteriaEstimations}
          endIcon={<IoArrowForward />}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
