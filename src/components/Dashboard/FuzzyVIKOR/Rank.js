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
  Grid,
  Button,
} from "@mui/material";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
export default function Rank({ rank, names, sompromiseSolution }) {
  const [isDetailsShown, setIsDetailsShown] = React.useState(false);
  const renderRankValues = (rankedValues) => {
    return Object.values(rankedValues)?.map((rankedValue, rankedValueIndex) => {
      const [, alternativeKey] = rankedValue[0].split("");
      const comparisonSymbol = rankedValue[2];
      const alternativeValue = rankedValue[1];
      const isLastElement = rankedValueIndex === rankedValues.length - 1;

      return (
        <React.Fragment key={alternativeKey}>
          <TableCell align="center" key={rankedValueIndex}>
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
              {names.alternativeNames[alternativeKey - 1]} (
              {alternativeValue.toFixed(2)})
            </div>
          </TableCell>
          {!isLastElement && (
            <TableCell align="center">
              {comparisonSymbol == ">" ? (
                <IoChevronForward />
              ) : (
                comparisonSymbol
              )}
            </TableCell>
          )}
        </React.Fragment>
      );
    });
  };
  const RankSum = renderRankValues(rank.rankedSum);
  const RankMax = renderRankValues(rank.rankedMax);
  const RankScore = renderRankValues(rank.rankedScore);

  const RankValues = (
    <>
      <TableRow>
        <TableCell align="center">Ranked sum</TableCell>
        {RankSum}
      </TableRow>
      <TableRow>
        <TableCell align="center">Ranked max</TableCell>
        {RankMax}
      </TableRow>
      <TableRow>
        <TableCell align="center">Ranked score</TableCell>
        {RankScore}
      </TableRow>
    </>
  );

  const CompromiseSolutionBox = ({
    title,
    condition,
    conditionColor,
    alternatives,
  }) => (
    <Box
      sx={{
        p: "12px",
        border: "1px solid #51454f",
        borderRadius: 2,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Box
        sx={{
          p: "12px",
          border: "1px solid #51454f",
          borderRadius: 2,
          backgroundColor: "#0f0f0f",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "flex-start",
          }}
        >
          <Typography>Condition:</Typography>
          <Typography color={conditionColor}>
            {condition ? "true" : "false"}
          </Typography>
        </Box>
        <Typography>
          Acceptable advantage:{" "}
          {sompromiseSolution.acceptableAdvantage.toFixed(2)}
        </Typography>
        <Typography>
          Discrimination power factor:{" "}
          {sompromiseSolution.discriminationPowerFactor.toFixed(2)}
        </Typography>
        <Typography>Compromise solutions:</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {alternatives.map((solutions, index) => {
            const [, alternativeKey] = solutions[0].split("");
            return (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "5px",
                  border: "1px solid #51454f",
                  backgroundColor: "#232222",
                  borderRadius: "5px",
                }}
              >
                {names.alternativeNames[alternativeKey - 1]} (
                {solutions[1].toFixed(2)})
              </div>
            );
          })}
        </Box>
      </Box>
    </Box>
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
        alignItems: "stretch",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          flexWrap: "wrap",
        }}
      >
        <Typography variant="h5">Ranked alternatives</Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableBody>{RankValues}</TableBody>
        </Table>
      </TableContainer>
      {isDetailsShown && (
        <>
          <Typography variant="h5" sx={{ marginTop: "20px" }}>
            Compromise solutions
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <CompromiseSolutionBox
                title="Acceptable advantage"
                condition={sompromiseSolution.acceptableAdvantageCondition}
                conditionColor={
                  sompromiseSolution.acceptableAdvantageCondition
                    ? "lime"
                    : "red"
                }
                alternatives={
                  sompromiseSolution.acceptableAdvantageAlternatives
                }
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <CompromiseSolutionBox
                title="Acceptable stability"
                condition={sompromiseSolution.acceptableStabilityCondition}
                conditionColor={
                  sompromiseSolution.acceptableStabilityCondition
                    ? "lime"
                    : "red"
                }
                alternatives={
                  sompromiseSolution.acceptableStabilityAlternatives
                }
              />
            </Box>
          </Box>
        </>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          flexWrap: "wrap",
        }}
      >
        <Button
          color="green"
          startIcon={isDetailsShown ? <IoChevronUp /> : <IoChevronDown />}
          onClick={() => setIsDetailsShown((prev) => !prev)}
        >
          {isDetailsShown ? "Hide" : "Show"} details
        </Button>
      </Box>
    </Box>
  );
}
