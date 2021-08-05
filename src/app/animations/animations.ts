import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade',[
      
    state('void',style({opacity:0})),

    transition(':enter',[
      animate(800)
    ]),
    transition(':leave',[
      animate(250)
    ]),
  ]);