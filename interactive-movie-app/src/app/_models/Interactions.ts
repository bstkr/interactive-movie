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
    pictureParts: PicturePart[];
    // path to the video to open
    sceneToOpenPath: string;
}

export interface PicturePart {
    path: string;
    styleClass: string;
    visible: boolean;
}

export type PovType = 'pov1' | 'pov2' | 'pov3';

export const Interactions: POV[] = [
    {
        // POV 1
        id: 'pov1', interactions: [
            {positionX: 42, positionY: 85, width: 180, height: 95, interactionId: 'pov1_interaction1', pictureParts: [
                {path: 'assets/pictures/room/pov1/object1/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov1/object1/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov1/object1/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov1/object1/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov1/object1/middle.png', styleClass: 'middle', visible: false},
                {path: 'assets/pictures/room/pov1/object2/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov1/object2/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov1/object2/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov1/object2/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov1/object2/middle.png', styleClass: 'middle', visible: true}
            ], sceneToOpenPath: ''}/*,
            {positionX: 10, positionY: 10, width:100, height: 75, interactionId: "pov1_interaction2", pictureParts: [
                "assets/pictures/room/pov1/object1/top.png",
                "assets/pictures/room/pov1/object1/right.png",
                "assets/pictures/room/pov1/object1/bottom.png",
                "assets/pictures/room/pov1/object1/left.png",
                "assets/pictures/room/pov1/object1/middle.png"
            ], sceneToOpenPath: ""},
            {positionX: 20, positionY: 20, width:100, height: 75, interactionId: "pov1_interaction3", pictureParts: [
                "assets/pictures/room/pov1/object1/top.png",
                "assets/pictures/room/pov1/object1/right.png",
                "assets/pictures/room/pov1/object1/bottom.png",
                "assets/pictures/room/pov1/object1/left.png",
                "assets/pictures/room/pov1/object1/middle.png"
            ], sceneToOpenPath: ""}*/
        ]
    },
    {
        id: 'pov2', interactions: [
            {positionX: 40, positionY: 80, width: 270, height: 180, interactionId: 'pov1_interaction1', pictureParts: [
                {path: 'assets/pictures/room/pov1/object1/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov1/object1/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov1/object1/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov1/object1/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov1/object1/middle.png', styleClass: 'middle', visible: false},
                {path: 'assets/pictures/room/pov1/object2/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov1/object2/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov1/object2/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov1/object2/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov1/object2/middle.png', styleClass: 'middle', visible: true}
            ], sceneToOpenPath: ''}
        ]
    },
    {
        id: 'pov3', interactions: [
            {positionX: 40, positionY: 80, width: 270, height: 180, interactionId: 'pov1_interaction1', pictureParts: [
                {path: 'assets/pictures/room/pov1/object1/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov1/object1/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov1/object1/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov1/object1/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov1/object1/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov1/object2/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov1/object2/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov1/object2/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov1/object2/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov1/object2/middle.png', styleClass: 'middle', visible: true}
            ], sceneToOpenPath: ''}
        ]
    }
];
