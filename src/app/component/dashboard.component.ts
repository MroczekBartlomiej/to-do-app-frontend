import {Component, OnInit} from "@angular/core";
import {ListOfTask} from "../model/list";
import {DashboardService} from "../service/dashboard.service";
@Component({
  selector: 'dashboard',
  templateUrl: 'app/component/dashboard.component.html',
  styleUrls: ['app/component/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lists: ListOfTask[];

  constructor(private listService: DashboardService) {
  };

  getLists(): void {
    this.listService.getAll().subscribe(list => {
      this.lists = list;
      console.log(this.lists)
    });
  }


  ngOnInit(): void {
    this.getLists();
  }
}

