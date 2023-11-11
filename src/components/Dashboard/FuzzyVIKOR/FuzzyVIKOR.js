import React from "react";
import GroupedEstimations from "./GroupedEstimations";
import { useSelector } from "react-redux";
import { groupEstimations } from "../../../utils/FuzzyVIKORUtils";

export default function FuzzyVIKOR() {
  const expertsEstimations = useSelector(
    (state) => state.expertsEstimationConfiguration
  );

  const criteriaEstimations = useSelector(
    (state) => state.criteriaEstimationConfiguration
  );

  const groupedAlternativesEstimations = groupEstimations(
    expertsEstimations.expertsEstimation,
    "alternatives"
  );

  const groupedCriteriaEstimations = groupEstimations(
    criteriaEstimations.criteriaEstimation,
    "criteria"
  );

  return (
    <GroupedEstimations
      groupedAlternativesEstimations={groupedAlternativesEstimations}
      groupedCriteriaEstimations={groupedCriteriaEstimations}
    />
  );
}
