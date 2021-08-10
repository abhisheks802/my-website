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
  export let dropdown = trigger('dropdown',[
      
    state('void',style({opacity:0, transform: 'translateY(-20px)'})),

    transition(':enter',[
      animate(350)
    ]),
    transition(':leave',[
      animate(200)
    ]),
  ]);