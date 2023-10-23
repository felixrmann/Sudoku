import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {

  @Input('x') public x: number;
  @Input('y') public y: number;

  constructor() {
    console.log(this.x)
    console.log(this.y)
  }

  ngOnInit() {
    console.log(this.x)
    console.log(this.y)
  }
}
