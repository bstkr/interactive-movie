import { VideoSequence } from './Interactions';

export interface Scene {
  sceneName: string;
  decisions: Decision[];
  sceneId: string;
  videoSequence: VideoSequence[];
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
    sceneName: 'Handy',
    decisions: [
      {
        decisionPos: '0',
        decisionContent: {
          decision1Headline: 'BIN DABEI!',
          decision1Content: 'Ich hab richtig Lust mit euch feiern zu gehen!',
          decision2Headline: 'PARTY? JA LOGO!',
          decision2Content: 'Ich hab richtig Bock die Jungs zu sehen!',
        },
      },
    ],
    sceneId: 'scene0',
    videoSequence: [
      {
        sequencePosition: 'intro',
        visible: true,
        pathToVideo: 'assets/video/0_Intro_HANDY/video-1.mp4',
      },
      {
        sequencePosition: 'alt-1',
        visible: false,
        pathToVideo: 'assets/video/0_Intro_HANDY/alt-1.mp4',
      },
      {
        sequencePosition: 'alt-2',
        visible: false,
        pathToVideo: 'assets/video/0_Intro_HANDY/alt-1.mp4',
      },
    ],
  },
  {
    sceneName: 'Einkaufszettel',
    decisions: [
      {
        decisionPos: '0',
        decisionContent: {
          decision1Headline: 'ALKOHOL IST DA!',
          decision1Content: 'Wir müssen nicht noch extra los!',
          decision2Headline: 'HABE NICHTS DA!',
          decision2Content: 'Wir müssen unbedingt noch Alkohol besorgen!',
        },
      },
    ],
    sceneId: 'scene1',
    videoSequence: [
      {
        sequencePosition: 'intro',
        visible: true,
        pathToVideo: 'assets/video/1_Vorbereitung_EINKAUFSZETTEL/video-1.mp4',
      },
      {
        sequencePosition: 'alt-1',
        visible: false,
        pathToVideo: 'assets/video/1_Vorbereitung_EINKAUFSZETTEL/alt-1.mp4',
      },
      {
        sequencePosition: 'alt-2',
        visible: false,
        pathToVideo: 'assets/video/1_Vorbereitung_EINKAUFSZETTEL/alt-2.mp4',
      },
      {
        sequencePosition: 'outro',
        visible: false,
        pathToVideo: 'assets/video/1_Vorbereitung_EINKAUFSZETTEL/video-2.mp4',
      },
    ],
  },
  {
    sceneName: 'Bier',
    decisions: [
      {
        decisionPos: '0',
        decisionContent: {
          decision1Headline: 'JA KLAR!',
          decision1Content: 'Ohne Musik wäre ja langweilig!',
          decision2Headline: 'LIEBER NICHT!',
          decision2Content: 'Das stört vermutlich die Nachbarn!',
        },
      },
      {
        decisionPos: '1',
        decisionContent: {
          decision1Headline: 'MACHE NICHT AUF!',
          decision1Content: 'Verrückter Typ, nicht, dass er etwas anstellt!',
          decision2Headline: 'MACHE AUF!',
          decision2Content:
            'Der Typ ist zwar echt verrückt, aber kann ja lustig werden!',
        },
      },
      {
        decisionPos: '2',
        decisionContent: {
          decision1Headline: 'MACHE NICHT AUF!',
          decision1Content: 'Verrückter Typ, nicht, dass er etwas anstellt!',
          decision2Headline: 'MACHE AUF!',
          decision2Content:
            'Der Typ ist zwar echt verrückt, aber kann ja lustig werden!',
        },
      },
    ],
    sceneId: 'scene2',
    videoSequence: [
      {
        sequencePosition: 'intro',
        visible: true,
        pathToVideo: 'assets/video/2_Vorglühen_BIERFLASCHE/video-1.mp4',
      },
      {
        sequencePosition: 'alt-1',
        visible: false,
        pathToVideo: 'assets/video/2_Vorglühen_BIERFLASCHE/alt-1.mp4',
      },
      {
        sequencePosition: 'alt-2',
        visible: false,
        pathToVideo: 'assets/video/2_Vorglühen_BIERFLASCHE/alt-2.mp4',
      },
      {
        sequencePosition: 'alt-1-1',
        visible: false,
        pathToVideo: 'assets/video/2_Vorglühen_BIERFLASCHE/alt-1-1.mp4',
      },
      {
        sequencePosition: 'alt-1-2',
        visible: false,
        pathToVideo: 'assets/video/2_Vorglühen_BIERFLASCHE/alt-1-2.mp4',
      },
      {
        sequencePosition: 'alt-2-1',
        visible: false,
        pathToVideo: 'assets/video/2_Vorglühen_BIERFLASCHE/alt-2-1.mp4',
      },
      {
        sequencePosition: 'alt-2-2',
        visible: false,
        pathToVideo: 'assets/video/2_Vorglühen_BIERFLASCHE/alt-2-2.mp4',
      },
      {
        sequencePosition: 'outro',
        visible: false,
        pathToVideo: 'assets/video/2_Vorglühen_BIERFLASCHE/video-2.mp4',
      },
    ],
  },
  {
    sceneName: 'Jacke',
    decisions: [
      {
        decisionPos: '0',
        decisionContent: {
          decision1Headline: 'NACH LINKS!',
          decision1Content:
            'Dann müssen wir nicht durch diese komische Gegend!',
          decision2Headline: 'NACH RECHTS!',
          decision2Content: 'Rechts geht es schneller!',
        },
      },
    ],
    sceneId: 'scene3',
    videoSequence: [
      {
        sequencePosition: 'intro',
        visible: true,
        pathToVideo: 'assets/video/3_Autofahrt_JACKE/video-1.mp4',
      },
      {
        sequencePosition: 'alt-1',
        visible: false,
        pathToVideo: 'assets/video/3_Autofahrt_JACKE/alt-1.mp4',
      },
      {
        sequencePosition: 'alt-2',
        visible: false,
        pathToVideo: 'assets/video/3_Autofahrt_JACKE/alt-2.mp4',
      },
      {
        sequencePosition: 'outro',
        visible: false,
        pathToVideo: 'assets/video/3_Autofahrt_JACKE/video-2.mp4',
      },
    ],
  },
  {
    sceneName: 'Computer',
    decisions: [
      {
        decisionPos: '0',
        decisionContent: {
          decision1Headline: 'AUF KEINEN FALL!',
          decision1Content: 'Lass lieber etwas anderes machen!',
          decision2Headline: 'LASS TANZEN!',
          decision2Content: 'Tanzen, da bin ich unschlagbar!',
        },
      },
    ],
    sceneId: 'scene4',
    videoSequence: [
      {
        sequencePosition: 'intro',
        visible: true,
        pathToVideo: 'assets/video/4_Party_COMPUTER/video-1.mp4',
      },
      {
        sequencePosition: 'alt-1',
        visible: false,
        pathToVideo: 'assets/video/4_Party_COMPUTER/alt-1.mp4',
      },
      {
        sequencePosition: 'alt-2',
        visible: false,
        pathToVideo: 'assets/video/4_Party_COMPUTER/alt-2.mp4',
      },
    ],
  },
  {
    sceneName: 'Nummer',
    decisions: [
      {
        decisionPos: '0',
        decisionContent: {
          decision1Headline: 'ICH MACHS!',
          decision1Content: 'Jetzt oder nie. Das ist dein Moment',
          decision2Headline: 'LIEBER NICHT!',
          decision2Content:
            'Ich weiß nicht was ich sagen soll, das wird nichts!',
        },
      },
    ],
    sceneId: 'scene5',
    videoSequence: [
      {
        sequencePosition: 'intro',
        visible: true,
        pathToVideo: 'assets/video/5_Nummer_NUMMER/video-1.mp4',
      },
      {
        sequencePosition: 'alt-1',
        visible: false,
        pathToVideo: 'assets/video/5_Nummer_NUMMER/alt-1.mp4',
      },
      {
        sequencePosition: 'alt-2',
        visible: false,
        pathToVideo: 'assets/video/5_Nummer_NUMMER/alt-2.mp4',
      },
      {
        sequencePosition: 'outro',
        visible: false,
        pathToVideo: 'assets/video/5_Nummer_NUMMER/video-2.mp4',
      },
    ],
  },
  {
    sceneName: 'Unterhose',
    decisions: [
      {
        decisionPos: '0',
        decisionContent: {
          decision1Headline: 'ZUM POOL!',
          decision1Content:
            'Sieht viel zu einladend aus. Außerdem ist mir kalt!',
          decision2Headline: 'ERST ABWARTEN!',
          decision2Content: 'Die Bewohner werden doch sicher wach!',
        },
      },
    ],
    sceneId: 'scene6',
    videoSequence: [
      {
        sequencePosition: 'intro',
        visible: true,
        pathToVideo: 'assets/video/6_Pool_UNTERHOSE/video-1.mp4',
      },
      {
        sequencePosition: 'alt-1',
        visible: false,
        pathToVideo: 'assets/video/6_Pool_UNTERHOSE/alt-1.mp4',
      },
      {
        sequencePosition: 'alt-2',
        visible: false,
        pathToVideo: 'assets/video/6_Pool_UNTERHOSE/alt-2.mp4',
      },
    ],
  },
  {
    sceneName: 'Zeitung',
    decisions: [
      {
        decisionPos: '0',
        decisionContent: {
          decision1Headline: 'SICHER NICHT!',
          decision1Content:
            'Heim laufen ist vermutlich die sicherere Variante!',
          decision2Headline: 'LASS HEIM!',
          decision2Content: 'Die zwei werden schon wissen, was sie machen!',
        },
      },
    ],
    sceneId: 'scene7',
    videoSequence: [
      {
        sequencePosition: 'intro',
        visible: true,
        pathToVideo: 'assets/video/7_End_ZEITUNG/video-1.mp4',
      },
      {
        sequencePosition: 'alt-1',
        visible: false,
        pathToVideo: 'assets/video/7_End_ZEITUNG/alt-1.mp4',
      },
      {
        sequencePosition: 'alt-2',
        visible: false,
        pathToVideo: 'assets/video/7_End_ZEITUNG/alt-2.mp4',
      },
    ],
  },
];
