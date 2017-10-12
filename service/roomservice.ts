import { Room } from '../model/room';
import { Pg } from '../model/pg';
export class RoomService {
 pg:Pg;

public getRooms(){
 return this.pg;
  }

public sendPg(pg:Pg){
  this.pg = pg;
  }
}