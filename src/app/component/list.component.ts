import {Component, OnInit, Input} from "@angular/core";
import "rxjs/add/operator/switchMap";
import {Task} from "../model/task";
import {TaskService} from "../service/task.service";
@Component({
  selector: "tasks-list",
  templateUrl: 'app/component/list.component.html',
  styleUrls: ['app/component/list.component.css']
})

export class ListComponent implements OnInit {


  @Input() listId: string;
  task: Task[];
  newTaskCardVisible: boolean = false;
  newTaskDescription: string;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.getTasksForList(this.listId)
  }

  getTasksForList(listId: string): void {
    this.taskService.getTaskByListId(listId).subscribe(_data => this.task = _data);
  }

  removeTaskFromList(task: Task): void {

  }

  addTaskToList(): void {

  }

  showNewTaskCard(): void {
    this.newTaskCardVisible = true;
  }

  hideNewTaskCard(): void {
    this.newTaskCardVisible = false;
  }
}
