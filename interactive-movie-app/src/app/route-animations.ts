import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';


  export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('isLeft => *', slideTo('right') ),
    transition('isBottom => *', slideToB() ),
    transition('* => isBottom', slideToT() )
  ]);

  function slideTo(direction) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ [direction]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('1200ms ease', style({ [direction]: '100%'}))
        ], optional),
        query(':enter', [
          animate('1200ms ease', style({ [direction]: '0%'}))
        ])
      ]),
    ];
  }

  function slideToB() {
    return [
      query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
      query(':leave', style({ transform: 'translateY(0%)' }), { optional: true }),
      query(':enter', style({ transform: 'translateY(-100%)' }), { optional: true }),
      group([
        query(':leave', [
          animate('1200ms ease', style({ transform: 'translateY(100%)' })),
        ], { optional: true }),
        query(':enter', [
          animate('1200ms ease', style({ transform: 'translateY(0%)' })),
        ], { optional: true })
      ])
    ];
  }

  function slideToT() {
    return [
      query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
      query(':leave', style({ transform: 'translateY(0%)' }), { optional: true }),
      query(':enter', style({ transform: 'translateY(100%)' }), { optional: true }),
      group([
        query(':leave', [
          animate('1200ms ease', style({ transform: 'translateY(-100%)' })),
        ], { optional: true }),
        query(':enter', [
          animate('1200ms ease', style({ transform: 'translateY(0%)' })),
        ], { optional: true })
      ])
    ];
  }