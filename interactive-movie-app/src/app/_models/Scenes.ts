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
          decision1Headline: "BIN DABEI!",
          decision1Content: "Ich hab richtig Lust mit euch feiern zu gehen!",
          decision2Headline: "LERNEN GEHT VOR!",
          decision2Content: "Ich hab noch echt viel für die Uni zu tun!",
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
          decision1Headline: "ALKOHOL IST DA!",
          decision1Content: "Wir müssen nicht noch extra los!",
          decision2Headline: "HABE NICHTS DA!",
          decision2Content: "Wir müssen unbedingt noch Alkohol besorgen!",
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
          decision1Headline: "JA KLAR!",
          decision1Content: "Ohne Musik wäre ja langweilig!",
          decision2Headline: "LIEBER NICHT!",
          decision2Content: "Das stört vermutlich die Nachbarn!",
        },
      },
      {
        decisionPos: "1",
        decisionContent: {
          decision1Headline: "MACHE NICHT AUF!",
          decision1Content: "Verrückter Typ, nicht, dass er etwas anstellt!",
          decision2Headline: "MACHE AUF!",
          decision2Content: "Der Typ ist zwar echt verrückt, aber kann ja lustig werden!",
        },
      },
      {
        decisionPos: "2",
        decisionContent: {
          decision1Headline: "MACHE NICHT AUF!",
          decision1Content: "Verrückter Typ, nicht, dass er etwas anstellt!",
          decision2Headline: "MACHE AUF!",
          decision2Content: "Der Typ ist zwar echt verrückt, aber kann ja lustig werden!",
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
          decision1Headline: "NACH LINKS!",
          decision1Content: "Dann müssen wir nicht durch diese komische Gegend!",
          decision2Headline: "NACH RECHTS!",
          decision2Content: "Rechts geht es schneller!",
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
          decision1Headline: "LASS TANZEN!",
          decision1Content: "Tanzen, da bin ich unschlagbar!",
          decision2Headline: "AUF KEINEN FALL!",
          decision2Content: "Lass lieber etwas anderes machen!",
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
          decision1Headline: "ICH MACHS!",
          decision1Content: "Jetzt oder nie. Das ist dein Moment",
          decision2Headline: "LIEBER NICHT!",
          decision2Content: "Ich weiß nicht was ich sagen soll, das wird nichts!",
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
          decision1Headline: "ZUM POOL!",
          decision1Content: "Sieht viel zu einladend aus. Außerdem ist mir kalt!",
          decision2Headline: "ERST ABWARTEN!",
          decision2Content: "Die Bewohner werden doch sicher wach!",
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
          decision1Headline: "LASS HEIM!",
          decision1Content: "Die zwei werden schon wissen, was sie machen!",
          decision2Headline: "SICHER NICHT!",
          decision2Content: "Heim laufen ist vermutlich die sicherere Variante!",
        },
      },
    ],
  },
];
