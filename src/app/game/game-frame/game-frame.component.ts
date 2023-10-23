import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'game-frame',
  templateUrl: './game-frame.component.html',
  styleUrls: ['./game-frame.component.css']
})
export class GameFrameComponent implements OnInit {
  public fields: number[];

  ngOnInit() {
    this.fields = [1,2,3,4,5,6,7,8,9]
  }
}
