import {Component, OnInit} from '@angular/core';
import {ListOfTask} from '../model/listOfTask';
import {DashboardService} from '../service/dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/component/dashboard.component.html',
  styleUrls: ['app/component/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lists: ListOfTask[];
  errorMessage: string;
  newListName: string;

  constructor(private dashboardService: DashboardService) {
  };

  createList(): void {
    let newList: ListOfTask = {
      id: null,
      name: this.newListName
    };
    this.dashboardService.create(newList)
      .subscribe(list => this.lists.push(list));
    this.newListName = null;
  }

  loadLists(): void {
    this.dashboardService.getAll()
      .subscribe(listOfTask => this.lists = listOfTask,
        error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.loadLists();
  }
}

