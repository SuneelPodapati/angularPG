import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PgDashboardComponent } from "./pg/dashboard.component";


// business modules
// import { OwnerModule } from './owner/owner.module';
// import { RoomModule } from './room/room.module';
// import { TenantModule } from './tenant/tenant.module';
//ends

import { AppComponent } from './app.component';
import {AddRoomComponent} from './room/room.component';
import {AddTenantComponent} from './tenant/tenant.component';
//services



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,AddRoomComponent,AddTenantComponent, PgDashboardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
