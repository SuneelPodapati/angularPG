import { Component,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'add-room',
  templateUrl: './room.component.html'
})

export class AddRoomComponent  {
 @Output() roomData = new EventEmitter();
constructor(){};
 
public addRoom(room):void{
this.roomData.emit(room);
} 
}
