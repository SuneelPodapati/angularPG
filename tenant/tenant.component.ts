import { Component,OnInit } from '@angular/core';
import { Pg } from '../model/pg';
import { RoomService } from '../service/roomservice';


@Component({
  selector: 'add-tenant',
  templateUrl: './tenant.component.html'
})

export class AddTenantComponent implements OnInit {
  roomcapacity:Array<number>=[];
  pg:Pg;
constructor(private _roomservice:RoomService){
  // this.getRoomCapacity();
};
  
ngOnInit(){}; 


public getRoomCapacity():void{
let pg = this._roomservice.getRooms();
this.roomcapacity = pg.rooms.map((x) => x.roomCapacity);

}

public addTenant(tenant){
 console.log(tenant)
}



}
