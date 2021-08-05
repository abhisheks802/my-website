import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade',[
      transition(':enter',[
        query('*', style({ opacity:0, transform: 'translateX(40px)'})),
        query('*', stagger('300ms',[
          animate('500ms 150ms ease-out',style({ opacity:1, transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  public imgSrc = '/assets/images/bg1.png';
  constructor() { }

  ngOnInit(): void {
  }

}
