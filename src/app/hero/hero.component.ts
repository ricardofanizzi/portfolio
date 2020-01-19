import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  constructor() {

  }

  ngOnInit() {
    this.myStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 120,
        },
        color: {
          value: '#2C6594'
        },
        shape: {
          type: 'edge',
          stroke: {
            color: '#2C6594',
            width: 2
          }
        },
      }
    };
  }

}
