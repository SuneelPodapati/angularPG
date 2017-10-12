import { Pg } from "./pg";

 export class Owner {
  
  public pg : Pg
     
  constructor(public firstName: string,
     public lastName: string,
     public number: string,
     private email: string,
     private password: string){

  }

  public createPg(name: string){
    this.pg = new Pg(name);
  }

 }