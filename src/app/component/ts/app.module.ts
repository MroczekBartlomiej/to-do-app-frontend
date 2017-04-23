import {DebugElement, NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {MenuComponent} from './menu.component';
import {DashboardComponent} from './dashboard.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {ListComponent} from './task.component';
import {DashboardService} from "../../service/dashboard.service";
import {TaskService} from "../../service/task.service";
import {ComponentFixture, TestBed} from "@angular/core/testing";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ComponentFixture,
    TestBed,
    DebugElement
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    ListComponent
  ],
  providers: [
    DashboardService,
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
