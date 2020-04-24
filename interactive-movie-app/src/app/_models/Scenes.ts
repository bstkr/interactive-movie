import { VideoSequence } from "./Interactions";

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
    sceneId: "scene0",
    videoSequence: [
      {
        sequencePosition: "intro",
        visible: true,
        pathToVideo: "assets/video/0_Intro_HANDY/video-1.mp4",
      },
      {
        sequencePosition: "alt-1",
        visible: false,
        pathToVideo: "assets/video/0_Intro_HANDY/alt-1.mp4",
      },
      {
        sequencePosition: "alt-2",
        visible: false,
        pathToVideo: "assets/video/0_Intro_HANDY/alt-2.mp4",
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
    sceneId: "scene1",
    videoSequence: [
      {
        sequencePosition: "intro",
        visible: true,
        pathToVideo: "assets/video/1_Vorbereitung_EINKAUFSZETTEL/video-1.mp4",
      },
      {
        sequencePosition: "alt-1",
        visible: false,
        pathToVideo: "assets/video/1_Vorbereitung_EINKAUFSZETTEL/alt-1.mp4",
      },
      {
        sequencePosition: "alt-2",
        visible: false,
        pathToVideo: "assets/video/1_Vorbereitung_EINKAUFSZETTEL/alt-2.mp4",
      },
      {
        sequencePosition: "outro",
        visible: false,
        pathToVideo: "assets/video/1_Vorbereitung_EINKAUFSZETTEL/video-2.mp4",
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
    sceneId: "scene2",
    videoSequence: [
      {
        sequencePosition: "intro",
        visible: true,
        pathToVideo: "assets/video/2_Vorglühen_BIERFLASCHE/video-1.mp4",
      },
      {
        sequencePosition: "alt-1",
        visible: false,
        pathToVideo: "assets/video/2_Vorglühen_BIERFLASCHE/alt-1.mp4",
      },
      {
        sequencePosition: "alt-2",
        visible: false,
        pathToVideo: "assets/video/2_Vorglühen_BIERFLASCHE/alt-2.mp4",
      },
      {
        sequencePosition: "alt-1-1",
        visible: false,
        pathToVideo: "assets/video/2_Vorglühen_BIERFLASCHE/alt-1-1.mp4",
      },
      {
        sequencePosition: "alt-1-2",
        visible: false,
        pathToVideo: "assets/video/2_Vorglühen_BIERFLASCHE/alt-1-2.mp4",
      },
      {
        sequencePosition: "alt-2-1",
        visible: false,
        pathToVideo: "assets/video/2_Vorglühen_BIERFLASCHE/alt-2-1.mp4",
      },
      {
        sequencePosition: "alt-2-2",
        visible: false,
        pathToVideo: "assets/video/2_Vorglühen_BIERFLASCHE/alt-2-2.mp4",
      },
      {
        sequencePosition: "outro",
        visible: false,
        pathToVideo: "assets/video/2_Vorglühen_BIERFLASCHE/video-2.mp4",
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
    sceneId: "scene3",
    videoSequence: [
      {
        sequencePosition: "intro",
        visible: true,
        pathToVideo: "assets/video/3_Autofahrt_JACKE/video-1.mp4",
      },
      {
        sequencePosition: "alt-1",
        visible: false,
        pathToVideo: "assets/video/3_Autofahrt_JACKE/alt-1.mp4",
      },
      {
        sequencePosition: "alt-2",
        visible: false,
        pathToVideo: "assets/video/3_Autofahrt_JACKE/alt-2.mp4",
      },
      {
        sequencePosition: "outro",
        visible: false,
        pathToVideo: "assets/video/3_Autofahrt_JACKE/video-2.mp4",
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
    sceneId: "scene4",
    videoSequence: [
      {
        sequencePosition: "intro",
        visible: true,
        pathToVideo: "assets/video/4_Party_COMPUTER/video-1.mp4",
      },
      {
        sequencePosition: "alt-1",
        visible: false,
        pathToVideo: "assets/video/4_Party_COMPUTER/alt-1.mp4",
      },
      {
        sequencePosition: "alt-2",
        visible: false,
        pathToVideo: "assets/video/4_Party_COMPUTER/alt-2.mp4",
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
    sceneId: "scene5",
    videoSequence: [
      {
        sequencePosition: "intro",
        visible: true,
        pathToVideo: "assets/video/5_Nummer_NUMMER/video-1.mp4",
      },
      {
        sequencePosition: "alt-1",
        visible: false,
        pathToVideo: "assets/video/5_Nummer_NUMMER/alt-1.mp4",
      },
      {
        sequencePosition: "alt-2",
        visible: false,
        pathToVideo: "assets/video/5_Nummer_NUMMER/alt-2.mp4",
      },
      {
        sequencePosition: "outro",
        visible: false,
        pathToVideo: "assets/video/5_Nummer_NUMMER/video-2.mp4",
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
    sceneId: "scene6",
    videoSequence: [
      {
        sequencePosition: "intro",
        visible: true,
        pathToVideo: "assets/video/6_Pool_UNTERHOSE/video-1.mp4",
      },
      {
        sequencePosition: "alt-1",
        visible: false,
        pathToVideo: "assets/video/6_Pool_UNTERHOSE/alt-1.mp4",
      },
      {
        sequencePosition: "alt-2",
        visible: false,
        pathToVideo: "assets/video/6_Pool_UNTERHOSE/alt-2.mp4",
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
    sceneId: "scene7",
    videoSequence: [
      {
        sequencePosition: "intro",
        visible: true,
        pathToVideo: "assets/video/7_End_ZEITUNG/video-1.mp4",
      },
      {
        sequencePosition: "alt-1",
        visible: false,
        pathToVideo: "assets/video/7_End_ZEITUNG/alt-1.mp4",
      },
      {
        sequencePosition: "alt-2",
        visible: false,
        pathToVideo: "assets/video/7_End_ZEITUNG/alt-2.mp4",
      },
    ],
  },
];
