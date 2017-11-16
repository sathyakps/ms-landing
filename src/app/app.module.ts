import { WorldMapComponent } from './landing/world-map/world-map.component';
import { LandingComponent } from './landing/landing.component';
import { Material } from './material.app';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WorldMapComponent
  ],
  imports: [
    BrowserModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
