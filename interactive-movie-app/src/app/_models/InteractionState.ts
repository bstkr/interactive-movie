export interface InteractionState {
  name: string;
  // Contains the interactions that are linked to this state
  Interactions: InteractionLink[];

  // true = interaction has been clicked
  clicked: boolean;
  // Contains decision the user has made ('a' / 'b') ['x' = no decision]
  decision: string;
  // Path to item image
  pathToItemImageA: string;
  pathToItemImageB: string;
}

export interface InteractionLink {
  interactionId: string;
  pathToCompleteObjectImage: { a: string; b: string };
}

export const InteractionStateArray: InteractionState[] = [
  {
    name: "Unterhose",
    Interactions: [
      {
        interactionId: "pov1_interaction1",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov1/object1/complete.png",
          b: "assets/pictures/room/pov1/object2/complete.png",
        },
      },
      {
        interactionId: "pov2_interaction1",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov2/object10/complete.png",
          b: "assets/pictures/room/pov2/object11/complete.png",
        },
      },
    ],
    clicked: false,
    decision: "x",
    pathToItemImageA: "assets/pictures/room/Objects/Unterhose_nass.png",
    pathToItemImageB: "assets/pictures/room/Objects/Unterhose_trocken.png",
  },
  {
    name: "Bier",
    Interactions: [
      {
        interactionId: "pov1_interaction2",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov1/object3/complete.png",
          b: "assets/pictures/room/pov1/object4/complete.png",
        },
      },
      {
        interactionId: "pov2_interaction1",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov2/object5/complete.png",
          b: "assets/pictures/room/pov2/object6/complete.png",
        },
      },
    ],
    clicked: false,
    decision: "x",
    pathToItemImageA: "",
    pathToItemImageB: "",
  },
  {
    name: "Jacke",
    Interactions: [
      {
        interactionId: "pov1_interaction3",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov1/object5/complete.png",
          b: "assets/pictures/room/pov1/object6/complete.png",
        },
      },
      {
        interactionId: "pov2_interaction7",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov2/object12/complete.png",
          b: "assets/pictures/room/pov2/object13/complete.png",
        },
      },
    ],
    clicked: false,
    decision: "x",
    pathToItemImageA: "assets/pictures/room/Objects/Jacke.png",
    pathToItemImageB: "assets/pictures/room/Objects/Jacke.png",
  },
  {
    name: "Einkaufszettel",
    Interactions: [
      {
        interactionId: "pov1_interaction4",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov1/object7/complete.png",
          b: "assets/pictures/room/pov1/object7/complete.png",
        },
      },
      {
        interactionId: "pov2_interaction5",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov2/object7/complete.png",
          b: "assets/pictures/room/pov2/object7/complete.png",
        },
      },
    ],
    clicked: false,
    decision: "x",
    pathToItemImageA: "",
    pathToItemImageB: "",
  },
  {
    name: "Handy",
    Interactions: [
      {
        interactionId: "pov1_interaction6",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov1/object10/complete2.png",
          b: "assets/pictures/room/pov1/object10/complete.png",
        },
      },
    ],
    clicked: false,
    decision: "x",
    pathToItemImageA: "",
    pathToItemImageB: "",
  },
  {
    name: "Computer",
    Interactions: [
      {
        interactionId: "pov1_interaction5",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov1/object8/complete.png",
          b: "assets/pictures/room/pov1/object9/complete.png",
        },
      },
      {
        interactionId: "pov2_interaction6",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov2/object8/complete.png",
          b: "assets/pictures/room/pov2/object9/complete.png",
        },
      },
    ],
    clicked: false,
    decision: "x",
    pathToItemImageA: "",
    pathToItemImageB: "",
  },
  {
    name: "Zeitung",
    Interactions: [
      {
        interactionId: "pov2_interaction3",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov2/object1/complete.png",
          b: "assets/pictures/room/pov2/object2/complete.png",
        },
      },
      {
        interactionId: "pov3_interaction1",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov3/object1/complete.png",
          b: "assets/pictures/room/pov3/object2/complete.png",
        },
      },
    ],
    clicked: false,
    decision: "x",
    pathToItemImageA: "assets/pictures/room/Objects/Zeitung.png",
    pathToItemImageB: "assets/pictures/room/Objects/Vorladung.png",
  },
  {
    name: "Nummer",
    Interactions: [
      {
        interactionId: "pov2_interaction4",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov2/object3/complete.png",
          b: "assets/pictures/room/pov2/object4/complete.png",
        },
      },
      {
        interactionId: "pov3_interaction2",
        pathToCompleteObjectImage: {
          a: "assets/pictures/room/pov3/object3/complete.png",
          b: "assets/pictures/room/pov3/object4/complete.png",
        },
      },
    ],
    clicked: false,
    decision: "x",
    pathToItemImageA: "assets/pictures/room/Objects/Nummer_Serviette.png",
    pathToItemImageB: "assets/pictures/room/Objects/Nummer_Zettel.png",
  },
];
