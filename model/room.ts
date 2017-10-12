
import { Tenant } from './tenant';


export class Room {

public roomNumber: number;
public tenants: Array<Tenant>;
  
constructor(public roomId: number, public roomCapacity: number, public roomType: boolean){
this.tenants = [];
}

private addTenant(tenant: Tenant): boolean{
  if(this.tenants.findIndex(x => x.mobileNumber == tenant.mobileNumber) == -1){
  this.tenants.push(tenant);
  return true;
  }
  return false;
  }

public removeTenant(mobileNumber: number):boolean{
 let index: number = this.tenants.findIndex(x => x.mobileNumber == mobileNumber);
 if(index > -1){
 this.tenants.splice(index, 1); 
 return true;
 }
 return false;
 }
}

