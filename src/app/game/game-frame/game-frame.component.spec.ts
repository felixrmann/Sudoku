import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFrameComponent } from './game-frame.component';

describe('GameFrameComponent', () => {
  let component: GameFrameComponent;
  let fixture: ComponentFixture<GameFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameFrameComponent]
    });
    fixture = TestBed.createComponent(GameFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
