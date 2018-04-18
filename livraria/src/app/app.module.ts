import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { LivrosComponent } from './livros/livros.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LivrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
