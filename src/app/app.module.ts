import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateLazyPipe } from './pipe/translate-lazy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitcherComponent,
    TranslateLazyPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
