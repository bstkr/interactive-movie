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

export type PovType = 'pov1' | 'pov2' | 'pov3';

export const Interactions: POV[] = [
    {
        // POV 1
        id: 'pov1', interactions: [
            {positionX: 42, positionY: 85, width: 175, height: 97, interactionId: 'pov1_interaction1', pictureParts: [
                {path: 'assets/pictures/room/pov1/object1/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov1/object1/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov1/object1/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov1/object1/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov1/object1/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov1/object2/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov1/object2/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov1/object2/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov1/object2/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov1/object2/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov1_interaction1_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]
        },
            {positionX: 29.5, positionY: 65, width: 156, height: 119, interactionId: 'pov1_interaction2', pictureParts: [
                {path: 'assets/pictures/room/pov1/object3/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov1/object3/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov1/object3/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov1/object3/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov1/object3/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov1/object4/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov1/object4/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov1/object4/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov1/object4/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov1/object4/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov1_interaction2_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]},
            {positionX: 54, positionY: 25, width: 945, height: 860, interactionId: 'pov1_interaction3', pictureParts: [
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
            ], sceneId: 'pov1_interaction3_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]},
            {positionX: 53.5, positionY: 54, width: 76, height: 33, interactionId: 'pov1_interaction4', pictureParts: [
                {path: 'assets/pictures/room/pov1/object7/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov1/object7/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov1/object7/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov1/object7/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov1/object7/middle.png', styleClass: 'middle', visible: true}
            ], sceneId: 'pov1_interaction4_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]},
            {positionX: 42.3, positionY: 39.2, width: 138, height: 87, interactionId: 'pov1_interaction3', pictureParts: [
                {path: 'assets/pictures/room/pov1/object8/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov1/object8/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov1/object8/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov1/object8/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov1/object8/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov1/object9/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov1/object9/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov1/object9/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov1/object9/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov1/object9/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov1_interaction3_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]}
        ]
    },
    {
        id: 'pov2', interactions: [
            {positionX: 20, positionY: 68, width: 175, height: 126, interactionId: 'pov2_interaction1', pictureParts: [
                {path: 'assets/pictures/room/pov2/object10/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov2/object10/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov2/object10/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov2/object10/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov2/object10/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov2/object11/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov2/object11/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov2/object11/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov2/object11/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov2/object11/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov2_interaction1_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]},
            {positionX: 21, positionY: 51, width: 140, height: 115, interactionId: 'pov2_interaction2', pictureParts: [
                {path: 'assets/pictures/room/pov2/object5/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov2/object5/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov2/object5/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov2/object5/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov2/object5/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov2/object6/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov2/object6/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov2/object6/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov2/object6/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov2/object6/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov2_interaction1_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]},
            {positionX: 85, positionY: 85.5, width: 402, height: 303, interactionId: 'pov2_interaction3', pictureParts: [
                {path: 'assets/pictures/room/pov2/object1/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov2/object1/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov2/object1/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov2/object1/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov2/object1/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov2/object2/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov2/object2/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov2/object2/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov2/object2/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov2/object2/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov2_interaction1_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]},
            {positionX: 52, positionY: 73, width: 126, height: 66, interactionId: 'pov2_interaction4', pictureParts: [
                {path: 'assets/pictures/room/pov2/object3/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov2/object3/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov2/object3/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov2/object3/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov2/object3/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov2/object4/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov2/object4/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov2/object4/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov2/object4/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov2/object4/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov2_interaction1_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]},
            {positionX: 35.5, positionY: 49.5, width: 60, height: 31.5, interactionId: 'pov2_interaction5', pictureParts: [
                {path: 'assets/pictures/room/pov2/object7/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov2/object7/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov2/object7/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov2/object7/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov2/object7/middle.png', styleClass: 'middle', visible: true},
            ], sceneId: 'pov2_interaction1_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]},
            {positionX: 34.1, positionY: 31.4, width: 96, height: 72.38, interactionId: 'pov2_interaction6', pictureParts: [
                {path: 'assets/pictures/room/pov2/object8/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov2/object8/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov2/object8/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov2/object8/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov2/object8/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov2/object9/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov2/object9/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov2/object9/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov2/object9/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov2/object9/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov2_interaction1_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]},
            {positionX: 29.5, positionY: 45, width: 353.75, height: 380, interactionId: 'pov2_interaction7', pictureParts: [
                {path: 'assets/pictures/room/pov2/object12/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov2/object12/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov2/object12/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov2/object12/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov2/object12/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov2/object13/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov2/object13/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov2/object13/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov2/object13/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov2/object13/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov2_interaction1_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]}
        ]
    },
    {
        id: 'pov3', interactions: [
            {positionX: 73, positionY: 66, width: 292, height: 204, interactionId: 'pov3_interaction1', pictureParts: [
                {path: 'assets/pictures/room/pov3/object1/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov3/object1/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov3/object1/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov3/object1/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov3/object1/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov3/object2/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov3/object2/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov3/object2/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov3/object2/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov3/object2/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov3_interaction1_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]},
            {positionX: 16, positionY: 76, width: 262, height: 173, interactionId: 'pov3_interaction1', pictureParts: [
                {path: 'assets/pictures/room/pov3/object3/top.png', styleClass: 'top', visible: true},
                {path: 'assets/pictures/room/pov3/object3/right.png', styleClass: 'right', visible: true},
                {path: 'assets/pictures/room/pov3/object3/bottom.png', styleClass: 'bottom', visible: true},
                {path: 'assets/pictures/room/pov3/object3/left.png', styleClass: 'left', visible: true},
                {path: 'assets/pictures/room/pov3/object3/middle.png', styleClass: 'middle', visible: true},
                {path: 'assets/pictures/room/pov3/object4/top.png', styleClass: 'top', visible: false},
                {path: 'assets/pictures/room/pov3/object4/right.png', styleClass: 'right', visible: false},
                {path: 'assets/pictures/room/pov3/object4/bottom.png', styleClass: 'bottom', visible: false},
                {path: 'assets/pictures/room/pov3/object4/left.png', styleClass: 'left', visible: false},
                {path: 'assets/pictures/room/pov3/object4/middle.png', styleClass: 'middle', visible: false}
            ], sceneId: 'pov3_interaction1_scene', videoSequence: [
                {sequencePosition: 'intro', pathToVideo: 'assets/video/tester/video-1.mp4'},
                {sequencePosition: 'alt-1', pathToVideo: 'assets/video/tester/alt-1.mp4'},
                {sequencePosition: 'alt-2', pathToVideo: 'assets/video/tester/alt-2.mp4'},
                {sequencePosition: 'outro', pathToVideo: 'assets/video/tester/video-2.mp4'}
            ]}
        ]
    }
];
