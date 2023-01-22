import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PagesMainViewComponent } from './pages.main-view/pages.main-view.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { DragDrop, DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
