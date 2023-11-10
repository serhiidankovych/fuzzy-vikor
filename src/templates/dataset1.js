export const numberOfAlternatives = 15;
export const numberOfCriteria = 8;
export const numberOfLinguisticTermsForAlternatives = 6;
export const numberOfLinguisticTermsForCriteria = 5;
export const numberOfExperts = 3;
export const names = {
  alternativeNames: [
    "Alternative1",
    "Alternative2",
    "Alternative3",
    "Alternative4",
    "Alternative5",
    "Alternative6",
    "Alternative7",
    "Alternative8",
    "Alternative9",
    "Alternative10",
    "Alternative11",
    "Alternative12",
    "Alternative13",
    "Alternative14",
    "Alternative15",
  ],
  criteriaNames: [
    "Criteria1",
    "Criteria2",
    "Criteria3",
    "Criteria4",
    "Criteria5",
    "Criteria6",
    "Criteria7",
    "Criteria8",
  ],
  linguisticTermsForAlternativesNames: ["VP", "P", "F", "G", "VG", "E"],
  linguisticTermsForCriteriaNames: ["VL", "L", "M", "H", "VH"],
  expertNames: ["Expert1", "Expert2", "Expert3"],
};

export const optimization = {
  c1: "Min",
  c2: "Max",
  c3: "Max",
  c4: "Max",
  c5: "Max",
  c6: "Min",
  c7: "Min",
  c8: "Max",
};

export const criteriaLinguisticTerms = [
  {
    linguisticTermId: 0,
    confines: [0, 0, 0.3],
    type: "lt-criteria",
  },
  {
    linguisticTermId: 1,
    confines: [0, 0.3, 0.5],
    type: "lt-criteria",
  },
  {
    linguisticTermId: 2,
    confines: [0.3, 0.5, 0.8],
    type: "lt-criteria",
  },
  {
    linguisticTermId: 3,
    confines: [0.5, 0.8, 1],
    type: "lt-criteria",
  },
  {
    linguisticTermId: 4,
    confines: [0.8, 1, 1],
    type: "lt-criteria",
  },
];

export const alternativesLinguisticTerms = [
  {
    linguisticTermId: 0,
    confines: [0, 0, 0.2],
    type: "lt-alternative",
  },
  {
    linguisticTermId: 1,
    confines: [0, 0.2, 0.4],
    type: "lt-alternative",
  },
  {
    linguisticTermId: 2,
    confines: [0.2, 0.4, 0.6],
    type: "lt-alternative",
  },
  {
    linguisticTermId: 3,
    confines: [0.4, 0.6, 0.8],
    type: "lt-alternative",
  },
  {
    linguisticTermId: 4,
    confines: [0.6, 0.8, 1],
    type: "lt-alternative",
  },
  {
    linguisticTermId: 5,
    confines: [0.8, 1, 1],
    type: "lt-alternative",
  },
];

export const criteriaEstimations = {};

export const expertsEstimations = {};
