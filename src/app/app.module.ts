import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotNavBarComponent } from './Footer/bot-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';

@NgModule({
  declarations: [AppComponent,TopNavBarComponent, BotNavBarComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
