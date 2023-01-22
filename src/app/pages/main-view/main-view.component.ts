import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
 constructor(){

 }
 board: Board=new Board('Test Board',[
  new Column('plans for today',[
  ]),
   new Column("Next In Line- prefrence",[
    
  ]),
  new Column('Task Completed!',[

  ]),
  new Column("Was not able -Yesterday",[
    "Start on a angular app(woym)","create component for main-view",
    "add drag and drop cli","app is completed","Start on an angular Notes app",
    "Record gameplay on oceanic server","upload wyom on github",
    "record screen for wyom app"
  ]) 
]);
 
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
