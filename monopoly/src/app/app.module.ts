import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameInitComponent } from './game-init/game-init.component';
import { DesktopComponent } from './desktop/desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    GameInitComponent,
    DesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
