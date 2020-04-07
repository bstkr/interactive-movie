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

    // Path to the parts of the picture
    pictureParts: PicturePart[];

    // Interaction click layer positioning
    clickLayerElements: ClickLayerElement[];

    hoverLayerElementPath: string;

    // id for the scene
    sceneId: string;
    // path to the video to open
    videoSequence: VideoSequence[];
}

export interface VideoSequence {
    sequencePosition: string;
    pathToVideo: string;
}

export interface PicturePart {
    path: string;
    styleClass: string;
    visible: boolean;
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
        id: 'pov1', interactions: [
            {
                positionX: 41, positionY: 85, width: 9.7, height: 9.5, interactionName: 'Unterhose', interactionId: 'pov1_interaction1', pictureParts: [
                    { path: 'assets/pictures/room/pov1/object1/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov1/object1/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov1/object1/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov1/object1/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov1/object1/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov1/object2/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov1/object2/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov1/object2/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov1/object2/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov1/object2/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 0, posY: 0, width: 100, height: 100 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov1/Object_1_2.svg', sceneId: 'pov1_interaction1_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 29.5, positionY: 65, width: 8.1, height: 10.7, interactionName: 'Bier', interactionId: 'pov1_interaction2', pictureParts: [
                    { path: 'assets/pictures/room/pov1/object3/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov1/object3/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov1/object3/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov1/object3/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov1/object3/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov1/object4/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov1/object4/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov1/object4/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov1/object4/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov1/object4/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 0, posY: 0, width: 100, height: 100 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov1/Object_3_4.svg', sceneId: 'pov1_interaction2_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester2/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester2/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester2/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester2/video-2.mp4' }
                ]
            },
            {
                positionX: 55, positionY: 27, width: 49, height: 79, interactionName: 'Jacke', interactionId: 'pov1_interaction3', pictureParts: [
                    { path: 'assets/pictures/room/pov1/object5/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov1/object5/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov1/object5/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov1/object5/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov1/object5/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov1/object6/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov1/object6/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov1/object6/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov1/object6/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov1/object6/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 41, posY: 12, width: 45, height: 34 },
                    { posX: 12, posY: 62, width: 44, height: 27 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov1/Object_5_6.svg', sceneId: 'pov1_interaction3_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 53.5, positionY: 54, width: 3.4, height: 2.6, interactionName: 'Einkaufszettel', interactionId: 'pov1_interaction4', pictureParts: [
                    { path: 'assets/pictures/room/pov1/object7/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov1/object7/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov1/object7/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov1/object7/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov1/object7/middle.png', styleClass: 'middle', visible: true }
                ], clickLayerElements: [
                    { posX: -25, posY: -50, width: 150, height: 200 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov1/Object_7.svg', sceneId: 'pov1_interaction4_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 14.58, positionY: 88.46, width: 6.63, height: 11.78, interactionName: 'Handy', interactionId: 'pov1_interaction6', pictureParts: [
                    { path: 'assets/pictures/room/pov1/object10/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov1/object10/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov1/object10/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov1/object10/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov1/object10/middle.png', styleClass: 'middle', visible: true }
                ], clickLayerElements: [
                    { posX: 0, posY: 0, width: 100, height: 100 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov1/Object_7.svg', sceneId: 'pov1_interaction6_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 42.2, positionY: 39.1, width: 7.4, height: 8.5, interactionName: 'Computer', interactionId: 'pov1_interaction5', pictureParts: [
                    { path: 'assets/pictures/room/pov1/object8/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov1/object8/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov1/object8/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov1/object8/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov1/object8/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov1/object9/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov1/object9/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov1/object9/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov1/object9/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov1/object9/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 0, posY: 0, width: 100, height: 100 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov1/Object_8_9.svg', sceneId: 'pov1_interaction3_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            }
        ]
    },
    {
        id: 'pov2', interactions: [
            {
                positionX: 19, positionY: 59, width: 7.7, height: 9.5, interactionName: 'Unterhose', interactionId: 'pov2_interaction1', pictureParts: [
                    { path: 'assets/pictures/room/pov2/object10/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov2/object10/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov2/object10/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov2/object10/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov2/object10/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov2/object11/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov2/object11/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov2/object11/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov2/object11/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov2/object11/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 0, posY: 0, width: 100, height: 100 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov2/Object_10_11.svg', sceneId: 'pov2_interaction1_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 22.7, positionY: 44.3, width: 6, height: 8.5, interactionName: 'Bier', interactionId: 'pov2_interaction2', pictureParts: [
                    { path: 'assets/pictures/room/pov2/object5/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov2/object5/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov2/object5/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov2/object5/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov2/object5/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov2/object6/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov2/object6/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov2/object6/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov2/object6/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov2/object6/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 0, posY: 0, width: 100, height: 100 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov2/Object_5_6.svg', sceneId: 'pov2_interaction1_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 85.4, positionY: 75.2, width: 16.3, height: 22.2, interactionName: 'Zeitung', interactionId: 'pov2_interaction3', pictureParts: [
                    { path: 'assets/pictures/room/pov2/object1/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov2/object1/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov2/object1/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov2/object1/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov2/object1/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov2/object2/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov2/object2/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov2/object2/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov2/object2/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov2/object2/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 4, posY: 16, width: 78, height: 80 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov2/Object_1_2.svg', sceneId: 'pov2_interaction1_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 51.6, positionY: 69.9, width: 5, height: 4.6, interactionName: 'Nummer', interactionId: 'pov2_interaction4', pictureParts: [
                    { path: 'assets/pictures/room/pov2/object3/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov2/object3/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov2/object3/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov2/object3/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov2/object3/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov2/object4/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov2/object4/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov2/object4/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov2/object4/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov2/object4/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 0, posY: 0, width: 100, height: 100 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov2/Object_3_4.svg', sceneId: 'pov2_interaction1_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 34.9, positionY: 41.7, width: 2.4, height: 2.6, interactionName: 'Einkaufszettel', interactionId: 'pov2_interaction5', pictureParts: [
                    { path: 'assets/pictures/room/pov2/object7/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov2/object7/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov2/object7/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov2/object7/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov2/object7/middle.png', styleClass: 'middle', visible: true },
                ], clickLayerElements: [
                    { posX: -15, posY: -10, width: 130, height: 120 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov2/Object_7.svg', sceneId: 'pov2_interaction1_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 33.7, positionY: 26.8, width: 5.5, height: 7.1, interactionName: 'Computer', interactionId: 'pov2_interaction6', pictureParts: [
                    { path: 'assets/pictures/room/pov2/object8/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov2/object8/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov2/object8/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov2/object8/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov2/object8/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov2/object9/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov2/object9/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov2/object9/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov2/object9/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov2/object9/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 0, posY: 0, width: 100, height: 100 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov2/Object_8_9.svg', sceneId: 'pov2_interaction1_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 29.2, positionY: 38.9, width: 20.3, height: 41.1, interactionName: 'Jacke', interactionId: 'pov2_interaction7', pictureParts: [
                    { path: 'assets/pictures/room/pov2/object12/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov2/object12/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov2/object12/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov2/object12/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov2/object12/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov2/object13/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov2/object13/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov2/object13/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov2/object13/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov2/object13/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 26, posY: 14, width: 59, height: 32 },
                    { posX: 11, posY: 52, width: 34, height: 32 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov2/Object_12_13.svg', sceneId: 'pov2_interaction1_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            }
        ]
    },
    {
        id: 'pov3', interactions: [
            {
                positionX: 74.4, positionY: 68.4, width: 14.6, height: 18, interactionName: 'Zeitung', interactionId: 'pov3_interaction1', pictureParts: [
                    { path: 'assets/pictures/room/pov3/object1/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov3/object1/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov3/object1/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov3/object1/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov3/object1/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov3/object2/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov3/object2/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov3/object2/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov3/object2/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov3/object2/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 0, posY: 0, width: 100, height: 100 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov3/Object_1_2.svg', sceneId: 'pov3_interaction1_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            },
            {
                positionX: 16, positionY: 76, width: 10, height: 12, interactionName: 'Nummer', interactionId: 'pov3_interaction2', pictureParts: [
                    { path: 'assets/pictures/room/pov3/object3/top.png', styleClass: 'top', visible: true },
                    { path: 'assets/pictures/room/pov3/object3/right.png', styleClass: 'right', visible: true },
                    { path: 'assets/pictures/room/pov3/object3/bottom.png', styleClass: 'bottom', visible: true },
                    { path: 'assets/pictures/room/pov3/object3/left.png', styleClass: 'left', visible: true },
                    { path: 'assets/pictures/room/pov3/object3/middle.png', styleClass: 'middle', visible: true },
                    { path: 'assets/pictures/room/pov3/object4/top.png', styleClass: 'top', visible: false },
                    { path: 'assets/pictures/room/pov3/object4/right.png', styleClass: 'right', visible: false },
                    { path: 'assets/pictures/room/pov3/object4/bottom.png', styleClass: 'bottom', visible: false },
                    { path: 'assets/pictures/room/pov3/object4/left.png', styleClass: 'left', visible: false },
                    { path: 'assets/pictures/room/pov3/object4/middle.png', styleClass: 'middle', visible: false }
                ], clickLayerElements: [
                    { posX: 0, posY: 0, width: 100, height: 100 }
                ], hoverLayerElementPath: 'assets/pictures/room/pov3/Object_3_4.svg', sceneId: 'pov3_interaction1_scene', videoSequence: [
                    { sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4' },
                    { sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4' },
                    { sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4' },
                    { sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4' }
                ]
            }
        ]
    }
];
