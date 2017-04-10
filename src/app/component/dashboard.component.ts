import {Component, OnInit} from "@angular/core";
import {ListOfTask} from "../model/listOfTask";
import {DashboardService} from "../service/dashboard.service";
import * as webdriver from "selenium-webdriver";
import error = webdriver.error;

@Component({
  selector: 'dashboard',
  templateUrl: 'app/component/dashboard.component.html',
  styleUrls: ['app/component/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lists: ListOfTask[];
  errorMessage: string;

  constructor(private listService: DashboardService) {
  };

  getLists(): void {
    this.listService.getAll()
      .subscribe(listOfTask => this.lists = listOfTask,
        error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getLists();
  }
}

