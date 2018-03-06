import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from './services/image.service';
import { SearchComponent } from './search/search.component';
import { ImageDetailsComponent } from './image-details/image-details.component';




import { AppRouter } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    SearchComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
    ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
