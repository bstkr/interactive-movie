import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { VideoSequence } from 'src/app/_models/Interactions';
import { InteractionService } from 'src/app/_services/interaction.service';
import { SceneService } from 'src/app/_services/scene.service';
import { Decision, Scene } from 'src/app/_models/Scenes';
import { MovieVideoComponent } from 'src/app/components/movie/movie-video/movie-video.component';
import { UserService } from 'src/app/_services/user.service';
import { SceneDecision, Decisions } from 'src/app/_models/Decisions';

@Component({
  selector: 'app-movie-scene',
  templateUrl: './movie-scene.component.html',
  styleUrls: ['./movie-scene.component.scss'],
})
export class MovieSceneComponent implements OnInit {
  @Input() scene: Scene;

  @ViewChildren(MovieVideoComponent)
  videoPlayers: QueryList<MovieVideoComponent>;

  decisionTimer;

  decisionArray: Decision[];
  currentDecision: string;

  sceneActive: boolean;
  userDecision: string[];

  userHasSeenIntro: boolean;
  perSetDecisions: SceneDecision[];

  constructor(
    public interactionService: InteractionService,
    public sceneService: SceneService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.perSetDecisions = Decisions;

    this.interactionService
      .getInteractionState(this.scene.sceneName)
      .decision.subscribe((s) => (this.userDecision = s.split(',')));
    this.sceneService.getSceneActive(this.scene.sceneId).subscribe((s) => {
      this.sceneActive = s;
      this.handleIntroStart();
    });
    /*this.sceneService
      .getSceneActive(this.scene.sceneId)
      .subscribe((s) => this.handleIntroStart());*/
    this.sceneService
      .getCurrentDecisionObservable()
      .subscribe((s) => (this.currentDecision = s));
    this.userService
      .getUserState()
      .subscribe((s) => (this.userHasSeenIntro = s.hasSeenIntro));
    this.decisionArray = this.sceneService.getDecisionsArrayFromSceneName(
      this.scene.sceneName
    );
  }

  click(e: Event) {
    const target = e.target as Element;
    target.classList.remove('show');
    target.classList.add('hidden');
  }

  onVideoEnded(video: VideoSequence) {
    const videoElement = document.getElementById(this.scene.sceneId);

    if (video.sequencePosition === 'intro') {
      this.handleIntroEnd();
    }

    if (
      video.sequencePosition === 'alt-1' ||
      video.sequencePosition === 'alt-2'
    ) {
      this.handleFirstPartEnd(video.sequencePosition, videoElement);
    }

    if (
      video.sequencePosition === 'alt-1-1' ||
      video.sequencePosition === 'alt-1-2' ||
      video.sequencePosition === 'alt-2-1' ||
      video.sequencePosition === 'alt-2-2'
    ) {
      this.handleSecondPartEnd();
    }

    if (video.sequencePosition === 'outro') {
      this.handleOutroEnd();
    }
  }

  handleIntroEnd() {
    const decisionContainer = document.getElementById(
      this.scene.sceneId + '0-decision'
    );

    if (this.userDecision[0] !== 'x') {
      const introElement = document.getElementById(
        this.scene.sceneId + '-intro'
      );
      const alt1Element = document.getElementById(
        this.scene.sceneId + '-alt-1'
      );
      const alt2Element = document.getElementById(
        this.scene.sceneId + '-alt-2'
      );
      this.handleVideoEndWithNoDecision(
        introElement,
        alt1Element,
        alt2Element,
        '0'
      );
    } else {
      decisionContainer.classList.remove('hidden');
      for (let i = 0; i < decisionContainer.children.length - 1; i++) {
        decisionContainer.children[i].classList.remove('hidden');
      }

      document.getElementById('sound-player').innerHTML =
        '<audio autoplay=\'autoplay\'><source src=\'/assets/sound/decision_sound.mp3\' type=\'audio/mpeg\'></audio>';

      this.decisionTimer = setTimeout((_) => {
        this.automaticClickDecision(0);
      }, 10000);
    }
  }

  handleFirstPartEnd(videoSequencePosition: string, videoElement: HTMLElement) {
    const altElement = document.getElementById(
      this.scene.sceneId + '-' + videoSequencePosition
    );
    const secondAlt1Element = document.getElementById(
      this.scene.sceneId + '-' + videoSequencePosition + '-1'
    );
    const secondAlt2Element = document.getElementById(
      this.scene.sceneId + '-' + videoSequencePosition + '-2'
    );

    const outroElement = document.getElementById(this.scene.sceneId + '-outro');

    altElement.classList.replace('currentVideo', 'closeVideo');

    if (secondAlt1Element && secondAlt2Element) {
      if (this.userDecision.length > 1) {
        this.sceneService.setCurrentDecisionObservable(this.userDecision[1]);
        setTimeout(() => {
          this.handleVideoEndWithNoDecision(
            altElement,
            secondAlt2Element,
            secondAlt2Element,
            this.userDecision[1]
          );
        }, 1000);
      } else {
        const decisionContainer = document.getElementById(
          this.scene.sceneId + this.userDecision[0] + '-decision'
        );
        decisionContainer.classList.remove('hidden');
        for (let i = 0; i < decisionContainer.children.length - 1; i++) {
          decisionContainer.children[i].classList.remove('hidden');
        }

        document.getElementById('sound-player').innerHTML =
          '<audio autoplay=\'autoplay\'><source src=\'/assets/sound/decision_sound.mp3\' type=\'audio/mpeg\'></audio>';

        this.decisionTimer = setTimeout((_) => {
          this.automaticClickDecision(0);
        }, 8000);
      }
    } else if (outroElement) {
      outroElement.classList.replace('hiddenVideo', 'currentVideo');
      this.startVideo(outroElement, 0);
    } else {
      // videoElement.classList.replace("show", "fade");
      setTimeout(() => {
        this.closeVideo(false);
      }, 2000);
    }
  }

  handleSecondPartEnd() {
    const videoElement = document.getElementById(this.scene.sceneId);
    const outroElement = document.getElementById(this.scene.sceneId + '-outro');

    if (outroElement) {
      outroElement.classList.replace('hiddenVideo', 'currentVideo');
      this.startVideo(outroElement, 500);
    } else {
      setTimeout(() => {
        this.closeVideo(false);
      }, 2000);
    }
  }

  handleOutroEnd() {
    const outroElement = document.getElementById(this.scene.sceneId + '-outro');

    setTimeout(() => {
      outroElement.classList.replace('currentVideo', 'closeVideo');
      this.closeVideo(false);
    }, 2000);
  }

  handleVideoEndWithNoDecision(
    endedElement: HTMLElement,
    alt1Element: HTMLElement,
    alt2Element: HTMLElement,
    decisionIndex: string
  ) {
    setTimeout(() => {}, 1000);
    const decisionContainer = document.getElementById(
      this.scene.sceneId + decisionIndex + '-decision'
    );
    const decisionElement = document.getElementById(
      this.scene.sceneId + decisionIndex + '-decision-completed'
    );

    decisionContainer.classList.remove('hidden');
    decisionElement.classList.remove('hidden');
    setTimeout(() => {
      decisionElement.classList.add('fade');
      endedElement.classList.replace('currentVideo', 'closeVideo');
      if (this.userDecision[0] === '1') {
        alt1Element.classList.replace('hiddenVideo', 'currentVideo');
        this.startVideo(alt1Element, 500);
      } else {
        alt2Element.classList.replace('hiddenVideo', 'currentVideo');
        this.startVideo(alt2Element, 500);
      }
    }, 3000);
    setTimeout(() => {
      decisionElement.classList.replace('fade', 'hidden');
      decisionContainer.classList.add('hidden');
    }, 6000);
  }

  onDecisionClick({ dec, decisionPos }) {
    if (this.decisionTimer) {
      clearTimeout(this.decisionTimer);
    }

    const introElement = document.getElementById(this.scene.sceneId + '-intro');
    const decisionContainer = document.getElementById(
      this.scene.sceneId + decisionPos + '-decision'
    );

    decisionContainer.children
      .namedItem('decision-' + dec)
      .classList.add('clicked');
    decisionContainer.classList.add('fade');

    setTimeout(() => {
      introElement.classList.replace('currentVideo', 'closeVideo');

      let userDecision: string;

      if (this.currentDecision !== '0') {
        userDecision = this.currentDecision;
        userDecision += ',' + this.handleSecondDecision(dec, decisionPos);
      } else {
        userDecision = this.handleFirstDecision(dec, decisionPos);
      }

      setTimeout(() => {
        decisionContainer.classList.replace('fade', 'hidden');
        this.sceneService.setCurrentDecisionObservable(dec);

        this.interactionService.setDecisionOfInteractionState(
          this.scene.sceneName,
          userDecision
        );
      }, 1000);
    }, 500);
  }

  handleFirstDecision(dec: string, decisionPos: string): string {
    const alt1Element = document.getElementById(this.scene.sceneId + '-alt-1');
    const alt2Element = document.getElementById(this.scene.sceneId + '-alt-2');
    const decisionContainerChildren = document.getElementById(
      this.scene.sceneId + decisionPos + '-decision'
    ).children as HTMLCollection;

    return this.handleDecision(
      dec,
      decisionContainerChildren,
      alt1Element,
      alt2Element
    );
  }

  handleSecondDecision(dec: string, decisionPos: string): string {
    const firstDecision = this.interactionService.getDecisionOfInteractionState(
      this.scene.sceneName
    );

    const decisionContainerChildren = document.getElementById(
      this.scene.sceneId + firstDecision + '-decision'
    ).children as HTMLCollection;

    if (firstDecision === '1') {
      const alt1alt1Element = document.getElementById(
        this.scene.sceneId + '-alt-1-1'
      );
      const alt1alt2Element = document.getElementById(
        this.scene.sceneId + '-alt-1-2'
      );

      return this.handleDecision(
        dec,
        decisionContainerChildren,
        alt1alt1Element,
        alt1alt2Element
      );
    } else {
      const alt2alt1Element = document.getElementById(
        this.scene.sceneId + '-alt-2-1'
      );
      const alt2alt2Element = document.getElementById(
        this.scene.sceneId + '-alt-2-2'
      );
      return this.handleDecision(
        dec,
        decisionContainerChildren,
        alt2alt1Element,
        alt2alt2Element
      );
    }
  }

  handleDecision(
    userDecision: string,
    decisionContainerChildren: HTMLCollection,
    alt1Element: HTMLElement,
    alt2Element: HTMLElement
  ): string {
    let d: string;

    if (userDecision === '1') {
      d = '1';
      alt1Element.classList.replace('hiddenVideo', 'currentVideo');
      this.startVideo(alt1Element, 2000);
    } else {
      d = '2';
      alt2Element.classList.replace('hiddenVideo', 'currentVideo');
      this.startVideo(alt2Element, 2000);
    }
    return d;
  }

  automaticClickDecision(currentPos: number) {
    const autoDecision = this.perSetDecisions.find(
      (dec) => this.scene.sceneId === dec.sceneId
    );
    this.onDecisionClick(autoDecision.decision[currentPos]);
  }

  handleIntroStart() {
    if (this.sceneActive === true) {
      const introElement = document.getElementById(
        this.scene.sceneId + '-intro'
      );
      setTimeout(() => {
        introElement.click();
      }, 1000);
    }
  }

  async startVideo(video: HTMLElement, msDelay: number) {
    await new Promise((resolve) =>
      setTimeout(() => resolve(), msDelay)
    ).then(() => video.click());
  }

  closeButton() {
    for (const component of this.videoPlayers.toArray()) {
      if (!component.videoPlayer.nativeElement.paused) {
        component.videoPlayer.nativeElement.pause();
        component.videoPlayer.nativeElement.currentTime = 0;
      }
    }
    this.closeVideo(true);
  }

  closeVideo(b?: boolean) {
    const videoElement = document.getElementById(this.scene.sceneId);
    const rightNavElement = document.getElementById('rightNav');
    const leftNavElement = document.getElementById('leftNav');
    const itemContainerElement = document.getElementById(
      this.scene.sceneName + '-item-component'
    );

    setTimeout(() => {
      if (rightNavElement) {
        rightNavElement.classList.remove('hidden');
      }
      if (leftNavElement) {
        leftNavElement.classList.remove('hidden');
      }
      if (!b) {
        itemContainerElement.classList.replace('hidden', 'show');
      }
      videoElement.classList.replace('show', 'fade');

      setTimeout(() => {
        videoElement.classList.replace('fade', 'hidden');
        this.resetVideoForRewatch();
      }, 2000);
    }, 1000);
  }

  resetVideoForRewatch() {
    const introElement = document.getElementById(this.scene.sceneId + '-intro');
    const outroElement = document.getElementById(this.scene.sceneId + '-outro');
    const decisionContainer = document.getElementById(
      this.scene.sceneId + '-decision-completed'
    );

    introElement.classList.replace('closeVideo', 'currentVideo');
    if (this.userDecision[0] === '1') {
      document
        .getElementById(this.scene.sceneId + '-alt-1')
        .classList.replace('closeVideo', 'hiddenVideo');
      if (this.userDecision.length > 1) {
        if (this.userDecision[1] === '1') {
          document
            .getElementById(this.scene.sceneId + '-alt-1-1')
            .classList.replace('closeVideo', 'hiddenVideo');
        } else {
          {
            document
              .getElementById(this.scene.sceneId + '-alt-1-2')
              .classList.replace('closeVideo', 'hiddenVideo');
          }
        }
      }
    } else {
      document
        .getElementById(this.scene.sceneId + '-alt-2')
        .classList.replace('closeVideo', 'hiddenVideo');
      if (this.userDecision.length > 1) {
        if (this.userDecision[1] === '1') {
          document
            .getElementById(this.scene.sceneId + '-alt-2-1')
            .classList.replace('closeVideo', 'hiddenVideo');
        } else {
          {
            document
              .getElementById(this.scene.sceneId + '-alt-2-2')
              .classList.replace('closeVideo', 'hiddenVideo');
          }
        }
      }
    }
    if (outroElement) {
      outroElement.classList.replace('closeVideo', 'hiddenVideo');
    }

    this.sceneService.setCurrentDecisionObservable('0');
    this.sceneService.setSceneActive(this.scene.sceneId, false);
  }
}
