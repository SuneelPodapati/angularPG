import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddRoomComponent } from './room.component';

@NgModule({
    imports:      [ CommonModule , FormsModule],
    declarations: [ AddRoomComponent]
})
 
 export class RoomModule{}