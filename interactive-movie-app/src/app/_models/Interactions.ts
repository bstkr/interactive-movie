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
            {positionX: 0, positionY: 0, width: 180, height: 200, interactionId: 'pov1_interaction1', pictureParts: [
                {path: 'assets/pictures/room/pov1/object3/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov1/object3/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov1/object3/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov1/object3/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov1/object3/middle.png', styleClass: 'middle', visible: true},
                {path: "assets/pictures/room/pov1/object4/top.png", styleClass: "top", visible: false},
                {path: "assets/pictures/room/pov1/object4/right.png", styleClass: "right", visible: false},
                {path: "assets/pictures/room/pov1/object4/bottom.png", styleClass: "bottom", visible: false},
                {path: "assets/pictures/room/pov1/object4/left.png", styleClass: "left", visible: false},
                {path: "assets/pictures/room/pov1/object4/middle.png", styleClass: "middle", visible: false}
            ], sceneToOpenPath: ''}*/,
            {positionX: 54, positionY: 16, width: 945, height: 860, interactionId: 'pov1_interaction2', pictureParts: [
                {path: 'assets/pictures/room/pov1/object5/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov1/object5/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov1/object5/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov1/object5/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov1/object5/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov1/object6/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov1/object6/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov1/object6/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov1/object6/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov1/object6/middle.png', styleClass: 'middle', visible: false}
            ], sceneToOpenPath: ''}
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
