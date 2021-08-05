import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:[
    trigger('fade',[
      transition(':enter',[
        query('.org-info', style({ opacity:0, transform: 'translateX(40px)'})),
        query('.about-image', style({ opacity:0, transform: 'translateX(-40px)'})),
        query('.org-info,.about-image', stagger('300ms',[
          animate('500ms 150ms ease-out',style({ opacity:1, transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
