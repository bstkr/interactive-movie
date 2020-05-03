export interface SceneDecision {
  sceneId: string;
  decision: Decision[];
}

export interface Decision {
  dec: string;
  decisionPos: string;
}

export const Decisions: SceneDecision[] = [
  {
    sceneId: 'scene0',
    decision: [
      {
        dec: '1',
        decisionPos: '0',
      },
    ],
  },
  {
    sceneId: 'scene1',
    decision: [
      {
        dec: '2',
        decisionPos: '0',
      },
    ],
  },
  {
    sceneId: 'scene2',
    decision: [
      {
        dec: '1',
        decisionPos: '0',
      },
      {
        dec: '2',
        decisionPos: '1',
      },
    ],
  },
  {
    sceneId: 'scene3',
    decision: [
      {
        dec: '2',
        decisionPos: '0',
      },
    ],
  },
  {
    sceneId: 'scene4',
    decision: [
      {
        dec: '2',
        decisionPos: '0',
      },
    ],
  },
  {
    sceneId: 'scene5',
    decision: [
      {
        dec: '1',
        decisionPos: '0',
      },
    ],
  },
  {
    sceneId: 'scene6',
    decision: [
      {
        dec: '1',
        decisionPos: '0',
      },
    ],
  },
  {
    sceneId: 'scene7',
    decision: [
      {
        dec: '1',
        decisionPos: '0',
      },
    ],
  },
];
