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

    interactionId: string;
    // path to the svg animation
    picturePath: string;
    // path to the video to open
    sceneToOpenPath: string;
}

export type PovType = "pov1" | "pov2" | "pov3";

export const Interactions: POV[] = [
    {
        // POV 1
        id: "pov1", interactions: [
            {positionX: 15.5, positionY: 90, width:100, height: 75, interactionId: "pov1_interaction1", picturePath: "", sceneToOpenPath: ""},
            {positionX: 10, positionY: 10, width:100, height: 75, interactionId: "pov1_interaction2", picturePath: "", sceneToOpenPath: ""},
            {positionX: 20, positionY: 20, width:100, height: 75, interactionId: "pov1_interaction3", picturePath: "", sceneToOpenPath: ""}
        ]
    },
    {
        id: "pov2", interactions: [
            {positionX: 15.5, positionY: 90, width:100, height: 75, interactionId: "pov1_interaction1", picturePath: "", sceneToOpenPath: ""},
            {positionX: 10, positionY: 10, width:100, height: 75, interactionId: "pov1_interaction2", picturePath: "", sceneToOpenPath: ""},
            {positionX: 20, positionY: 20, width:100, height: 75, interactionId: "pov1_interaction3", picturePath: "", sceneToOpenPath: ""}
        ]
    },
    {
        id: "pov3", interactions: [
            {positionX: 15.5, positionY: 90, width:100, height: 75, interactionId: "pov1_interaction1", picturePath: "", sceneToOpenPath: ""},
            {positionX: 10, positionY: 10, width:100, height: 75, interactionId: "pov1_interaction2", picturePath: "", sceneToOpenPath: ""},
            {positionX: 20, positionY: 20, width:100, height: 75, interactionId: "pov1_interaction3", picturePath: "", sceneToOpenPath: ""}
        ]
    }
];