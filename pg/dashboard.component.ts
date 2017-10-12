import { Component,Input} from "@angular/core";
import { Pg } from "../model/pg";
import { Room } from "../model/room";
import { Tenant } from "../model/tenant";
import { RoomService } from '../service/roomservice';

@Component({
  selector: "pg-dashboard",
  templateUrl: "./dashboard.component.html"
})


export class PgDashboardComponent{
  private static totalRooms: number = 0;
  public rooms: Array<Room>;
  public tenants: Array<Tenant>;
  @Input() pg: Pg;
constructor(private _roomservice:RoomService){
  this.rooms = [];
  this.tenants = [];
}

public addRoom(roomCapacity: number, roomType: boolean, count: number){
   for(let i = 0;i< count; i++){
    PgDashboardComponent.totalRooms++;
    let r: Room = new Room(PgDashboardComponent.totalRooms, roomCapacity,roomType);
    this.pg.addRoom(r);
  }

   this._roomservice.sendPg(this.pg);
}

public getRoomsCount(){
  return PgDashboardComponent.totalRooms;
}

public roomFormData(room){
this.addRoom(room.roomCapacity, room.roomType, room.totalRooms);
}


}
 