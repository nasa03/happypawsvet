import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BotNavBarComponent } from './Footer/bot-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { ScrollSpyComponent } from './scrollspy/scrollspy.component';

@NgModule({
  declarations: [AppComponent,TopNavBarComponent, 
    BotNavBarComponent, CarouselComponent,
  CardComponent, ScrollSpyComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
