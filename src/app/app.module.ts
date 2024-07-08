import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { ListComponent } from './artists/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
