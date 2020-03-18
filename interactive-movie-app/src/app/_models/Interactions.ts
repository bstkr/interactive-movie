export interface Interaction {
    // TODO: can we place the interactions in another way than pixel-measurements
    positionX: number;
    positionY: number;

    interactionId: string;
    // path to the svg animation
    picturePath: string;
    // path to the video to open
    sceneToOpenPath: string;
}

export const Interactions = [
    {
        // POV 1
        id: "pov1", interactions: [
            {positionX: 20, positionY: 20, interactionId: "pov1_interaction1", picturePath: "", sceneToOpenPath: ""},
            {positionX: 200, positionY: 200, interactionId: "pov1_interaction2", picturePath: "", sceneToOpenPath: ""},
            {positionX: 700, positionY: 700, interactionId: "pov1_interaction3", picturePath: "", sceneToOpenPath: ""}
        ]
    },
    {},
    {}
];