import { Component } from '@angular/core';
import { Pg } from './model/pg';
import { Room } from "./model/room";
import { Tenant } from "./model/tenant";
import { Owner } from "./model/owner";
import { RoomService } from './service/roomservice';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ RoomService ]
})
export class AppComponent  {
  public owner: Owner;

constructor(){
  this.CheckOwner();
}

public addPg(pgName: string){
  this.owner.createPg(pgName);
}

public Login(userName: string, password: string): boolean{
    // Login User 
    return true;
}

public GetOwner(): Owner{
    // get owner from DB 
    //if(this.Login("", "")){
 return new Owner("SaiDeep","Konduri", "8508204123","a.b@c.d","abc123");
    //}
}

public CheckOwner(): void{
  if(this.owner == undefined){
  this.owner = this.GetOwner();
  this.addPg("nestaway");
  console.log(this.owner);
  
}
}
}
