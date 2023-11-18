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
  IconButton,
  Button,
} from "@mui/material";
import {
  IoChevronForward,
  IoChevronDown,
  IoChevronUp,
  IoCheckmark,
  IoClose,
} from "react-icons/io5";

export default function Rank({ rank, names, sompromiseSolution }) {
  const [isDetailsShown, setIsDetailsShown] = React.useState(false);
  const [isCompromiseConditionshown, setIsCompromiseConditionsShown] =
    React.useState(false);

  const [, firstRankedAlternativeScore] =
    sompromiseSolution.firstRankedAlternativeScore[0].split("");
  const [, firstRankedAlternativeSum] =
    sompromiseSolution.firstRankedAlternativeSum[0].split("");
  const [, firstRankedAlternativeMax] =
    sompromiseSolution.firstRankedAlternativeMax[0].split("");
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
        <TableCell align="center">Ranked sum(S)</TableCell>
        {RankSum}
      </TableRow>
      <TableRow>
        <TableCell align="center">Ranked max(R)</TableCell>
        {RankMax}
      </TableRow>
      <TableRow>
        <TableCell align="center">Ranked score(Q)</TableCell>
        {RankScore}
      </TableRow>
    </>
  );
  const renderFormula = (title, spanName, values) => {
    return (
      <p>
        <span>{title}</span>
        <sub
          style={{
            fontFamily: "Montserrat",
            padding: "2px",
          }}
        >
          {spanName && `${spanName}`}
        </sub>
        {values && `(${values})`}
      </p>
    );
  };
  const StabilityCondition = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "3px",
        justifyContent: "center",
      }}
    >
      {renderFormula(
        "Q",
        names.alternativeNames[firstRankedAlternativeScore - 1],
        ""
      )}
      = Best(
      {renderFormula(
        "S",
        names.alternativeNames[firstRankedAlternativeSum - 1],
        ""
      )}
      {" || "}
      {renderFormula(
        "R",
        names.alternativeNames[firstRankedAlternativeMax - 1],
        ""
      )}
      )
    </div>
  );

  const AdvantageCondition = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "3px",
        justifyContent: "center",
      }}
    >
      {renderFormula(
        "Adv",
        "",
        sompromiseSolution.acceptableAdvantage.toFixed(2)
      )}
      ≥
      {renderFormula(
        "DQ",
        "",
        sompromiseSolution.discriminationPowerFactor.toFixed(2)
      )}
    </div>
  );

  const CompromiseSolutionBox = ({
    title,
    condition,
    conditionName,
    conditionColor,
    alternatives,
    isExtraCondition,
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
        {conditionName}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "flex-start",
          }}
        >
          <Typography> Condition: </Typography>
          <Typography color={conditionColor}>
            {condition ? "true" : "false"}
          </Typography>
        </Box>
        {isExtraCondition && (
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography>Compromise conditions</Typography>

            <IconButton
              color="green"
              onClick={() => setIsCompromiseConditionsShown((prev) => !prev)}
            >
              {isCompromiseConditionshown ? <IoChevronUp /> : <IoChevronDown />}
            </IconButton>
          </Box>
        )}
        {isExtraCondition &&
          isCompromiseConditionshown &&
          alternatives.map(([solution, score], index) => {
            const [, alternativeKey] = solution.split("");
            const alternativeName = names.alternativeNames[alternativeKey - 1];
            const firstRankedAlternativeName =
              names.alternativeNames[firstRankedAlternativeScore - 1];

            const discriminationPowerFactor =
              sompromiseSolution.discriminationPowerFactor;

            const differenceFirstScoreCondition =
              sompromiseSolution.differenceFirstScoreCondition;

            const alternativeScore = renderFormula(
              "Q",
              alternativeName,
              score.toFixed(2)
            );
            const firstAlternativeScore = renderFormula(
              "Q",
              firstRankedAlternativeName,
              alternatives[0][1].toFixed(2)
            );

            return (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "12px",
                  border: "1px solid #51454f",
                  marginTop: "5px",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  {alternativeScore}-{firstAlternativeScore}
                  {` < DQ(${discriminationPowerFactor.toFixed(2)})`}
                </div>
                {differenceFirstScoreCondition ? (
                  <IoCheckmark color="lime" />
                ) : (
                  <IoClose color="red" />
                )}
              </div>
            );
          })}

        <Typography sx={{ marginTop: "10px" }}>
          Compromise solutions:
        </Typography>
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
                title="Acceptable stability"
                condition={sompromiseSolution.acceptableStabilityCondition}
                conditionName={StabilityCondition}
                conditionColor={
                  sompromiseSolution.acceptableStabilityCondition
                    ? "lime"
                    : "red"
                }
                isExtraCondition={true}
                isCompromiseConditionshown={isCompromiseConditionshown}
                alternatives={
                  sompromiseSolution.acceptableStabilityAlternatives
                }
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <CompromiseSolutionBox
                title="Acceptable advantage"
                condition={sompromiseSolution.acceptableAdvantageCondition}
                conditionName={AdvantageCondition}
                conditionColor={
                  sompromiseSolution.acceptableAdvantageCondition
                    ? "lime"
                    : "red"
                }
                alternatives={
                  sompromiseSolution.acceptableAdvantageAlternatives
                }
                isExtraCondition={false}
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
