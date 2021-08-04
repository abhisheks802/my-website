import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
  animations: [
    trigger('fade',[
      transition(':enter',[
        query('.branch', style({ opacity:0, transform: 'translateX(-40px)'})),
        query('.branch', stagger('300ms',[
          animate('500ms 150ms ease-out',style({ opacity:1, transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class BranchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
