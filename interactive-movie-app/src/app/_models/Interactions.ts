export interface POV {
  id: string;
  interactions: Interaction[];
}
export interface Interaction {
  // TODO: can we place the interactions in another way than pixel-measurements
  positionX: number;
  positionY: number;

  width: number;
  height: number;

  interactionName: string;
  interactionId: string;

  // Interaction click layer positioning
  clickLayerElements: ClickLayerElement[];

  hoverLayerElementPath: string;
}

export interface VideoSequence {
  sequencePosition: string;
  visible: boolean;
  pathToVideo: string;
}

export interface ClickLayerElement {
  posX: number;
  posY: number;

  width: number;
  height: number;
}

export type PovType = 'pov1' | 'pov2' | 'pov3';

export const Interactions: POV[] = [
  {
    id: 'pov1',
    interactions: [
      {
        positionX: 41,
        positionY: 85,
        width: 9.7,
        height: 9.5,
        interactionName: 'Unterhose',
        interactionId: 'pov1_interaction1',
        clickLayerElements: [{ posX: 0, posY: 0, width: 100, height: 100 }],
        hoverLayerElementPath: 'assets/pictures/room/pov1/Object_1_2.svg',
      },
      {
        positionX: 29.5,
        positionY: 65,
        width: 8.1,
        height: 10.7,
        interactionName: 'Bier',
        interactionId: 'pov1_interaction2',
        clickLayerElements: [{ posX: 0, posY: 0, width: 100, height: 100 }],
        hoverLayerElementPath: 'assets/pictures/room/pov1/Object_3_4.svg',
      },
      {
        positionX: 53,
        positionY: 26,
        width: 49,
        height: 79,
        interactionName: 'Jacke',
        interactionId: 'pov1_interaction3',
        clickLayerElements: [
          { posX: 41, posY: 12, width: 45, height: 34 },
          { posX: 12, posY: 62, width: 44, height: 27 },
        ],
        hoverLayerElementPath: 'assets/pictures/room/pov1/Object_5_6.svg',
      },
      {
        positionX: 53.5,
        positionY: 54,
        width: 3.4,
        height: 2.6,
        interactionName: 'Einkaufszettel',
        interactionId: 'pov1_interaction4',
        clickLayerElements: [{ posX: -25, posY: -50, width: 150, height: 200 }],
        hoverLayerElementPath: 'assets/pictures/room/pov1/Object_7.svg',
      },
      {
        positionX: 42.2,
        positionY: 39.1,
        width: 7.4,
        height: 8.5,
        interactionName: 'Computer',
        interactionId: 'pov1_interaction5',
        clickLayerElements: [{ posX: 0, posY: 0, width: 100, height: 100 }],
        hoverLayerElementPath: 'assets/pictures/room/pov1/Object_8_9.svg',
      },
      {
        positionX: 14.58,
        positionY: 88.46,
        width: 6.63,
        height: 11.78,
        interactionName: 'Handy',
        interactionId: 'pov1_interaction6',
        clickLayerElements: [{ posX: 0, posY: 0, width: 100, height: 100 }],
        hoverLayerElementPath: 'assets/pictures/room/pov1/Object_10.svg',
      },
    ],
  },
  {
    id: 'pov2',
    interactions: [
      {
        positionX: 19,
        positionY: 59,
        width: 7.7,
        height: 9.5,
        interactionName: 'Unterhose',
        interactionId: 'pov2_interaction1',
        clickLayerElements: [{ posX: 0, posY: 0, width: 100, height: 100 }],
        hoverLayerElementPath: 'assets/pictures/room/pov2/Object_10_11.svg',
      },
      {
        positionX: 22.7,
        positionY: 44.3,
        width: 6,
        height: 8.5,
        interactionName: 'Bier',
        interactionId: 'pov2_interaction2',
        clickLayerElements: [{ posX: 0, posY: 0, width: 100, height: 100 }],
        hoverLayerElementPath: 'assets/pictures/room/pov2/Object_5_6.svg',
      },
      {
        positionX: 85.4,
        positionY: 75.2,
        width: 16.3,
        height: 22.2,
        interactionName: 'Zeitung',
        interactionId: 'pov2_interaction3',
        clickLayerElements: [{ posX: 4, posY: 16, width: 78, height: 80 }],
        hoverLayerElementPath: 'assets/pictures/room/pov2/Object_1_2.svg',
      },
      {
        positionX: 51.6,
        positionY: 69.9,
        width: 5,
        height: 4.6,
        interactionName: 'Nummer',
        interactionId: 'pov2_interaction4',
        clickLayerElements: [{ posX: 0, posY: 0, width: 100, height: 100 }],
        hoverLayerElementPath: 'assets/pictures/room/pov2/Object_3_4.svg',
      },
      {
        positionX: 34.9,
        positionY: 41.7,
        width: 2.4,
        height: 2.6,
        interactionName: 'Einkaufszettel',
        interactionId: 'pov2_interaction5',
        clickLayerElements: [{ posX: -15, posY: -10, width: 130, height: 120 }],
        hoverLayerElementPath: 'assets/pictures/room/pov2/Object_7.svg',
      },
      {
        positionX: 33.7,
        positionY: 26.8,
        width: 5.5,
        height: 7.1,
        interactionName: 'Computer',
        interactionId: 'pov2_interaction6',
        clickLayerElements: [{ posX: 0, posY: 0, width: 100, height: 100 }],
        hoverLayerElementPath: 'assets/pictures/room/pov2/Object_8_9.svg',
      },
      {
        positionX: 29.2,
        positionY: 38.9,
        width: 20.3,
        height: 41.1,
        interactionName: 'Jacke',
        interactionId: 'pov2_interaction7',
        clickLayerElements: [
          { posX: 26, posY: 14, width: 59, height: 32 },
          { posX: 11, posY: 52, width: 34, height: 32 },
        ],
        hoverLayerElementPath: 'assets/pictures/room/pov2/Object_12_13.svg',
      },
    ],
  },
  {
    id: 'pov3',
    interactions: [
      {
        positionX: 74.4,
        positionY: 68.4,
        width: 14.6,
        height: 18,
        interactionName: 'Zeitung',
        interactionId: 'pov3_interaction1',
        clickLayerElements: [{ posX: 0, posY: 0, width: 100, height: 100 }],
        hoverLayerElementPath: 'assets/pictures/room/pov3/Object_1_2.svg',
      },
      {
        positionX: 16,
        positionY: 76,
        width: 10,
        height: 12,
        interactionName: 'Nummer',
        interactionId: 'pov3_interaction2',
        clickLayerElements: [{ posX: 0, posY: 0, width: 100, height: 100 }],
        hoverLayerElementPath: 'assets/pictures/room/pov3/Object_3_4.svg',
      },
    ],
  },
];
