import { Component, OnInit } from '@angular/core';
import { fade, slideLeft } from 'src/app/animations/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:[
    slideLeft, fade
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
