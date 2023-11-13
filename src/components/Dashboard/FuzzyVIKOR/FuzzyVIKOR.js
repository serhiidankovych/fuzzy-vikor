import React from "react";

import GroupedEstimations from "./GroupedEstimations";
import SyntheticMeasure from "./SyntheticMeasure";
import BestWorstCriteria from "./BestWorstCriteria";
import NormalizedDifference from "./NormalizedDifference";

import { useSelector } from "react-redux";
import {
  groupEstimations,
  getFuzzySyntheticMeasure,
  getBestWorstCriteria,
  getNormalizedFuzzyDifference,
} from "../../../utils/FuzzyVIKORUtils";

export default function FuzzyVIKOR() {
  const names = useSelector((state) => state.nameConfiguration);
  const expertsEstimations = useSelector(
    (state) => state.expertsEstimationConfiguration
  );

  const criteriaEstimations = useSelector(
    (state) => state.criteriaEstimationConfiguration
  );

  const criteriaLinguisticTerms = useSelector(
    (state) => state.criteriaConfiguration
  );

  const alternativesLinguisticTerms = useSelector(
    (state) => state.alternativeConfiguration
  );
  const optimization = useSelector((state) => state.optimizationConfiguration);

  const groupedAlternativesEstimations = groupEstimations(
    expertsEstimations.expertsEstimation,
    "alternatives"
  );

  const groupedCriteriaEstimations = groupEstimations(
    criteriaEstimations.criteriaEstimation,
    "criteria"
  );

  const fuzzyCriteriaSyntheticMeasure = getFuzzySyntheticMeasure(
    groupedCriteriaEstimations,
    criteriaLinguisticTerms.criteriaLinguisticTerms
  );

  const fuzzyAlternativesSyntheticMeasure = getFuzzySyntheticMeasure(
    groupedAlternativesEstimations,
    alternativesLinguisticTerms.alternativeLinguisticTerms
  );

  const bestWorstCriteria = getBestWorstCriteria(
    fuzzyAlternativesSyntheticMeasure,
    optimization.optimization
  );

  const normalizedFuzzyDifference = getNormalizedFuzzyDifference(
    bestWorstCriteria,
    fuzzyAlternativesSyntheticMeasure,
    optimization.optimization
  );

  return (
    <>
      <GroupedEstimations
        groupedAlternativesEstimations={groupedAlternativesEstimations}
        groupedCriteriaEstimations={groupedCriteriaEstimations}
        names={names}
        criteriaLinguisticTerms={criteriaLinguisticTerms}
        alternativesLinguisticTerms={alternativesLinguisticTerms}
      />
      <SyntheticMeasure
        fuzzyCriteriaSyntheticMeasure={fuzzyCriteriaSyntheticMeasure}
        fuzzyAlternativesSyntheticMeasure={fuzzyAlternativesSyntheticMeasure}
        names={names}
      />

      <BestWorstCriteria
        names={names}
        bestWorstCriteria={bestWorstCriteria}
        optimization={optimization.optimization}
      />
      <NormalizedDifference
        names={names}
        normalizedFuzzyDifference={normalizedFuzzyDifference}
      />
    </>
  );
}
