import { Room } from './room';


export class Pg {

public rooms: Array<Room>

constructor(public pgName: string){
 this.rooms = [];
 
 }
public addRoom(room: Room): boolean{
    if(this.rooms.findIndex(x => x.roomId == room.roomId) == -1){
    this.rooms.push(room);
     console.log(this.rooms);
    return true;
    }
    return false;
    }

public removeRoom(roomId: number):boolean{
    let index: number = this.rooms.findIndex(x => x.roomId == roomId);
    if(index > -1){
     this.rooms.splice(index, 1);
     return true;
     }
     return false;
   }
}