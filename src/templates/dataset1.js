export const numberOfAlternatives = 3;
export const numberOfCriteria = 4;
export const numberOfLinguisticTermsForAlternatives = 7;
export const numberOfLinguisticTermsForCriteria = 7;
export const numberOfExperts = 3;
export const names = {
  alternativeNames: ["Phantom", " Falcon", "Nimbus"],
  criteriaNames: ["Performance", "Cost", "Durability", "Range"],
  linguisticTermsForAlternativesNames: [
    "Unacceptable",
    "Poor",
    "Limited",
    "Below Average",
    "Average",
    "Good",
    "Very good",
  ],
  linguisticTermsForCriteriaNames: [
    "Very Low",
    "Low",
    "Medium-Low",
    "Medium",
    "Medium-High",
    "High",
    "Very High",
  ],
  expertNames: [
    "Dr. Amelia Carter",
    "Professor Rajesh Gupta",
    "Dr. Sarah Rodriguez",
  ],
};

export const maxMin = {
  c1: "Max",
  c2: "Max",
  c3: "Max",
  c4: "Max",
};

export const criteriaLinguisticTerms = [
  {
    id: 0,
    linguisticTerm: "Very Low",
    confines: [0, 0, 0.2],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
      {
        x: 0.2,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0, 0.2],
    normalizedTriangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
      {
        x: 0.2,
        y: 0,
      },
    ],
  },
  {
    id: 1,
    linguisticTerm: "Low",
    confines: [0, 0.2, 0.3],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.2,
        y: 1,
      },
      {
        x: 0.3,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0.2, 0.3],
    normalizedTriangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.2,
        y: 1,
      },
      {
        x: 0.3,
        y: 0,
      },
    ],
  },
  {
    id: 2,
    linguisticTerm: "Medium-Low",
    confines: [0.2, 0.3, 0.5],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.2,
        y: 0,
      },
      {
        x: 0.3,
        y: 1,
      },
      {
        x: 0.5,
        y: 0,
      },
    ],
    normalizedConfines: [0.2, 0.3, 0.5],
    normalizedTriangularChart: [
      {
        x: 0.2,
        y: 0,
      },
      {
        x: 0.3,
        y: 1,
      },
      {
        x: 0.5,
        y: 0,
      },
    ],
  },
  {
    id: 3,
    linguisticTerm: "Medium",
    confines: [0.3, 0.5, 0.7],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
    normalizedConfines: [0.3, 0.5, 0.7],
    normalizedTriangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
  },
  {
    id: 4,
    linguisticTerm: "Medium-High",
    confines: [0.5, 0.7, 0.8],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.5,
        y: 0,
      },
      {
        x: 0.7,
        y: 1,
      },
      {
        x: 0.8,
        y: 0,
      },
    ],
    normalizedConfines: [0.5, 0.7, 0.8],
    normalizedTriangularChart: [
      {
        x: 0.5,
        y: 0,
      },
      {
        x: 0.7,
        y: 1,
      },
      {
        x: 0.8,
        y: 0,
      },
    ],
  },
  {
    id: 5,
    linguisticTerm: "High",
    confines: [0.7, 0.8, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.7, 0.8, 1],
    normalizedTriangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  {
    id: 6,
    linguisticTerm: "Very High",
    confines: [0.8, 1, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.8, 1, 1],
    normalizedTriangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
];

export const alternativesLinguisticTerms = [
  {
    id: 0,
    linguisticTerm: "Unacceptable",
    confines: [0, 0, 0.2],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
      {
        x: 0.2,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0, 0.2],
    normalizedTriangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
      {
        x: 0.2,
        y: 0,
      },
    ],
  },
  {
    id: 1,
    linguisticTerm: "Poor",
    confines: [0, 0.2, 0.3],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.2,
        y: 1,
      },
      {
        x: 0.3,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0.2, 0.3],
    normalizedTriangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.2,
        y: 1,
      },
      {
        x: 0.3,
        y: 0,
      },
    ],
  },
  {
    id: 2,
    linguisticTerm: "Limited",
    confines: [0.2, 0.3, 0.5],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0.2,
        y: 0,
      },
      {
        x: 0.3,
        y: 1,
      },
      {
        x: 0.5,
        y: 0,
      },
    ],
    normalizedConfines: [0.2, 0.3, 0.5],
    normalizedTriangularChart: [
      {
        x: 0.2,
        y: 0,
      },
      {
        x: 0.3,
        y: 1,
      },
      {
        x: 0.5,
        y: 0,
      },
    ],
  },
  {
    id: 3,
    linguisticTerm: "Below Average",
    confines: [0.3, 0.5, 0.7],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
    normalizedConfines: [0.3, 0.5, 0.7],
    normalizedTriangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
  },
  {
    id: 4,
    linguisticTerm: "Average",
    confines: [0.5, 0.7, 0.8],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0.5,
        y: 0,
      },
      {
        x: 0.7,
        y: 1,
      },
      {
        x: 0.8,
        y: 0,
      },
    ],
    normalizedConfines: [0.5, 0.7, 0.8],
    normalizedTriangularChart: [
      {
        x: 0.5,
        y: 0,
      },
      {
        x: 0.7,
        y: 1,
      },
      {
        x: 0.8,
        y: 0,
      },
    ],
  },
  {
    id: 5,
    linguisticTerm: "Good",
    confines: [0.7, 0.8, 1],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.7, 0.8, 1],
    normalizedTriangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  {
    id: 6,
    linguisticTerm: "Very good",
    confines: [0.8, 1, 1],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.8, 1, 1],
    normalizedTriangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
];

export const criteriaEstimations = {
  "e1-c1": {
    id: 5,
    linguisticTerm: "High",
    confines: [0.7, 0.8, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.7, 0.8, 1],
    normalizedTriangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  "e1-c2": {
    id: 3,
    linguisticTerm: "Medium",
    confines: [0.3, 0.5, 0.7],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
    normalizedConfines: [0.3, 0.5, 0.7],
    normalizedTriangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
  },
  "e1-c3": {
    id: 5,
    linguisticTerm: "High",
    confines: [0.7, 0.8, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.7, 0.8, 1],
    normalizedTriangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  "e1-c4": {
    id: 3,
    linguisticTerm: "Medium",
    confines: [0.3, 0.5, 0.7],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
    normalizedConfines: [0.3, 0.5, 0.7],
    normalizedTriangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
  },
  "e2-c1": {
    id: 3,
    linguisticTerm: "Medium",
    confines: [0.3, 0.5, 0.7],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
    normalizedConfines: [0.3, 0.5, 0.7],
    normalizedTriangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
  },
  "e2-c2": {
    id: 5,
    linguisticTerm: "High",
    confines: [0.7, 0.8, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.7, 0.8, 1],
    normalizedTriangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  "e2-c3": {
    id: 5,
    linguisticTerm: "High",
    confines: [0.7, 0.8, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.7, 0.8, 1],
    normalizedTriangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  "e2-c4": {
    id: 5,
    linguisticTerm: "High",
    confines: [0.7, 0.8, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.7, 0.8, 1],
    normalizedTriangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  "e3-c1": {
    id: 6,
    linguisticTerm: "Very High",
    confines: [0.8, 1, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.8, 1, 1],
    normalizedTriangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  "e3-c2": {
    id: 5,
    linguisticTerm: "High",
    confines: [0.7, 0.8, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.7, 0.8, 1],
    normalizedTriangularChart: [
      {
        x: 0.7,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  "e3-c3": {
    id: 6,
    linguisticTerm: "Very High",
    confines: [0.8, 1, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.8, 1, 1],
    normalizedTriangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  "e3-c4": {
    id: 3,
    linguisticTerm: "Medium",
    confines: [0.3, 0.5, 0.7],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
    normalizedConfines: [0.3, 0.5, 0.7],
    normalizedTriangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.7,
        y: 0,
      },
    ],
  },
};

export const expertsEstimations = {
  "e1-a1-c1": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 1,
    expertId: 1,
  },
  "e1-a1-c2": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 2,
    expertId: 1,
  },
  "e1-a1-c3": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 3,
    expertId: 1,
  },
  "e1-a1-c4": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 4,
    expertId: 1,
  },
  "e1-a2-c1": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 1,
    expertId: 1,
  },
  "e1-a2-c2": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 2,
    expertId: 1,
  },
  "e1-a2-c3": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 3,
    expertId: 1,
  },
  "e1-a2-c4": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 4,
    expertId: 1,
  },
  "e1-a3-c1": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 1,
    expertId: 1,
  },
  "e1-a3-c2": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 2,
    expertId: 1,
  },
  "e1-a3-c3": {
    data: {
      id: 3,
      linguisticTerm: "Below Average",
      confines: [0.3, 0.5, 0.7],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.3,
          y: 0,
        },
        {
          x: 0.5,
          y: 1,
        },
        {
          x: 0.7,
          y: 0,
        },
      ],
      normalizedConfines: [0.3, 0.5, 0.7],
      normalizedTriangularChart: [
        {
          x: 0.3,
          y: 0,
        },
        {
          x: 0.5,
          y: 1,
        },
        {
          x: 0.7,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 3,
    expertId: 1,
  },
  "e1-a3-c4": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 4,
    expertId: 1,
  },
  "e2-a1-c1": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 1,
    expertId: 2,
  },
  "e2-a1-c2": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 2,
    expertId: 2,
  },
  "e2-a1-c3": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 3,
    expertId: 2,
  },
  "e2-a1-c4": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 4,
    expertId: 2,
  },
  "e2-a2-c1": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 1,
    expertId: 2,
  },
  "e2-a2-c2": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 2,
    expertId: 2,
  },
  "e2-a2-c3": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 3,
    expertId: 2,
  },
  "e2-a2-c4": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 4,
    expertId: 2,
  },
  "e2-a3-c1": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 1,
    expertId: 2,
  },
  "e2-a3-c2": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 2,
    expertId: 2,
  },
  "e2-a3-c3": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 3,
    expertId: 2,
  },
  "e2-a3-c4": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 4,
    expertId: 2,
  },
  "e3-a1-c1": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 1,
    expertId: 3,
  },
  "e3-a1-c2": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 2,
    expertId: 3,
  },
  "e3-a1-c3": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 3,
    expertId: 3,
  },
  "e3-a1-c4": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 1,
    criteria: 4,
    expertId: 3,
  },
  "e3-a2-c1": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 1,
    expertId: 3,
  },
  "e3-a2-c2": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 2,
    expertId: 3,
  },
  "e3-a2-c3": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 3,
    expertId: 3,
  },
  "e3-a2-c4": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 2,
    criteria: 4,
    expertId: 3,
  },
  "e3-a3-c1": {
    data: {
      id: 6,
      linguisticTerm: "Very good",
      confines: [0.8, 1, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.8, 1, 1],
      normalizedTriangularChart: [
        {
          x: 0.8,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 1,
    expertId: 3,
  },
  "e3-a3-c2": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 2,
    expertId: 3,
  },
  "e3-a3-c3": {
    data: {
      id: 4,
      linguisticTerm: "Average",
      confines: [0.5, 0.7, 0.8],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
      normalizedConfines: [0.5, 0.7, 0.8],
      normalizedTriangularChart: [
        {
          x: 0.5,
          y: 0,
        },
        {
          x: 0.7,
          y: 1,
        },
        {
          x: 0.8,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 3,
    expertId: 3,
  },
  "e3-a3-c4": {
    data: {
      id: 5,
      linguisticTerm: "Good",
      confines: [0.7, 0.8, 1],
      type: "lt-alternative",
      triangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      normalizedConfines: [0.7, 0.8, 1],
      normalizedTriangularChart: [
        {
          x: 0.7,
          y: 0,
        },
        {
          x: 0.8,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        },
      ],
    },
    alternative: 3,
    criteria: 4,
    expertId: 3,
  },
};
