import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from "@angular/animations";

export const slider = trigger("routeAnimations", [
  transition("* => isLeft", [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }),
      ],
      { optional: true }
    ),
    query(":enter", [style({ left: "-100%" })]),
    group([
      query(":leave", [animate("1200ms ease", style({ left: "100%" }))], {
        optional: true,
      }),
      query(":enter", [animate("1200ms ease", style({ left: "0%" }))]),
    ]),
  ]),
  transition("isLeft => *", [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
        }),
      ],
      { optional: true }
    ),
    query(":enter", [style({ right: "-100%" })]),
    group([
      query(":leave", [animate("1200ms ease", style({ right: "100%" }))], {
        optional: true,
      }),
      query(":enter", [animate("1200ms ease", style({ right: "0%" }))]),
    ]),
  ]),
  transition("isBottom => *", [
    query(
      ":enter, :leave",
      style({ position: "fixed", left: 0, right: 0, top: 0, bottom: 0 }),
      { optional: true }
    ),
    query(":leave", style({ transform: "translateY(0%)" }), { optional: true }),
    query(":enter", style({ transform: "translateY(-100%)" }), {
      optional: true,
    }),
    group([
      query(
        ":leave",
        [animate("1200ms ease", style({ transform: "translateY(100%)" }))],
        { optional: true }
      ),
      query(
        ":enter",
        [animate("1200ms ease", style({ transform: "translateY(0%)" }))],
        { optional: true }
      ),
    ]),
  ]),
  transition("* => isBottom", [
    query(
      ":enter, :leave",
      style({ position: "fixed", left: 0, right: 0, top: 0, bottom: 0 }),
      { optional: true }
    ),
    query(":leave", style({ transform: "translateY(0%)" }), { optional: true }),
    query(":enter", style({ transform: "translateY(100%)" }), {
      optional: true,
    }),
    group([
      query(
        ":leave",
        [animate("1200ms ease", style({ transform: "translateY(-100%)" }))],
        { optional: true }
      ),
      query(
        ":enter",
        [animate("1200ms ease", style({ transform: "translateY(0%)" }))],
        { optional: true }
      ),
    ]),
  ]),
]);
