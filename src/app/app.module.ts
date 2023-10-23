import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameFrameComponent } from './game/game-frame/game-frame.component';
import { GameBlockComponent } from './game/game-block/game-block.component';
import { GameFieldComponent } from './game/game-field/game-field.component';

@NgModule({
  declarations: [
    AppComponent,
    GameFrameComponent,
    GameBlockComponent,
    GameFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
