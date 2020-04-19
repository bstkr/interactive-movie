export interface Scene {
  sceneName: string;
  decisions: Decision[];
}

export interface Decision {
  decisionPos: string;
  decisionContent: {
    decision1Headline: string;
    decision1Content: string;
    decision2Headline: string;
    decision2Content: string;
  };
}

export const Scenes: Scene[] = [
  {
    sceneName: "Handy",
    decisions: [
      {
        decisionPos: "0",
        decisionContent: {
          decision1Headline: "Handy 1",
          decision1Content: "Handy 1 Content",
          decision2Headline: "Handy 2",
          decision2Content: "Handy 2 Content",
        },
      },
    ],
  },
  {
    sceneName: "Einkaufszettel",
    decisions: [
      {
        decisionPos: "0",
        decisionContent: {
          decision1Headline: "Einkaufszettel 1",
          decision1Content: "Einkaufszettel 1 Content",
          decision2Headline: "Einkaufszettel 2",
          decision2Content: "Einkaufszettel 2 Content",
        },
      },
    ],
  },
  {
    sceneName: "Bier",
    decisions: [
      {
        decisionPos: "0",
        decisionContent: {
          decision1Headline: "Bier 1",
          decision1Content: "Bier 1 Content",
          decision2Headline: "Bier 2",
          decision2Content: "Bier 2 Content",
        },
      },
      {
        decisionPos: "1",
        decisionContent: {
          decision1Headline: "Bier 1 - 1",
          decision1Content: "Bier 1 - 1 Content",
          decision2Headline: "Bier 1 - 2",
          decision2Content: "Bier 1 - 2 Content",
        },
      },
      {
        decisionPos: "2",
        decisionContent: {
          decision1Headline: "Bier 2 - 1",
          decision1Content: "Bier 2 - 1 Content",
          decision2Headline: "Bier 2 - 2",
          decision2Content: "Bier 2 - 2 Content",
        },
      },
    ],
  },
  {
    sceneName: "Jacke",
    decisions: [
      {
        decisionPos: "0",
        decisionContent: {
          decision1Headline: "Jacke 1",
          decision1Content: "Jacke 1 Content",
          decision2Headline: "Jacke 2",
          decision2Content: "Jacke 2 Content",
        },
      },
    ],
  },
  {
    sceneName: "Computer",
    decisions: [
      {
        decisionPos: "0",
        decisionContent: {
          decision1Headline: "Computer 1",
          decision1Content: "Computer 1 Content",
          decision2Headline: "Computer 2",
          decision2Content: "Computer 2 Content",
        },
      },
    ],
  },
  {
    sceneName: "Nummer",
    decisions: [
      {
        decisionPos: "0",
        decisionContent: {
          decision1Headline: "Nummer 1",
          decision1Content: "Nummer 1 Content",
          decision2Headline: "Nummer 2",
          decision2Content: "Nummer 2 Content",
        },
      },
    ],
  },
  {
    sceneName: "Unterhose",
    decisions: [
      {
        decisionPos: "0",
        decisionContent: {
          decision1Headline: "Unterhose 1",
          decision1Content: "Unterhose 1 Content",
          decision2Headline: "Unterhose 2",
          decision2Content: "Unterhose 2 Content",
        },
      },
    ],
  },
  {
    sceneName: "Zeitung",
    decisions: [
      {
        decisionPos: "0",
        decisionContent: {
          decision1Headline: "Zeitung 1",
          decision1Content: "Zeitung 1 Content",
          decision2Headline: "Zeitung 2",
          decision2Content: "Zeitung 2 Content",
        },
      },
    ],
  },
];
