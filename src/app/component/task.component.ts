import {Component, OnInit, Input} from "@angular/core";
import "rxjs/add/operator/switchMap";
import {Task} from "../model/task";
import {TaskService} from "../service/task.service";
import * as webdriver from "selenium-webdriver";
import error = webdriver.error;

@Component({
  selector: "tasks-list",
  templateUrl: 'app/component/task.component.html',
  styleUrls: ['app/component/task.component.css']
})

export class ListComponent implements OnInit {


  @Input() listId: string;
  tasks: Task[];
  newTaskCardVisible: boolean = false;
  newTaskDescription: string;
  errorMessage: string;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.getTasksForList(this.listId)
  }

  addTaskToList(taskDescribe: string) {
    let newTask: Task = {
      id: null,
      listId: this.listId,
      description: taskDescribe
    };
    this.taskService.create(newTask)
      .subscribe(task => this.tasks.push(task),
        error => this.errorMessage =<any>error);
    this.hideNewTaskCard;

  }

  getTasksForList(listId: string): void {
    this.taskService.getTaskByListId(listId)
      .subscribe(_data => this.tasks = _data,
        error => this.errorMessage = <any>error);
  }

  removeTaskFromList(task: Task) {
    this.taskService.deleteTask(task.id)
    this.tasks.splice(this.tasks.indexOf(task),1)
  }

  showNewTaskCard(): void {
    this.newTaskCardVisible = true;
  }

  hideNewTaskCard(): void {
    this.newTaskCardVisible = false;
    this.newTaskDescription = null;
  }
}
