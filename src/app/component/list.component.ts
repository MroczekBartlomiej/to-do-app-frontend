import {Component, OnInit, Input} from "@angular/core";
import "rxjs/add/operator/switchMap";
import {Task} from "../model/task";
import {TaskService} from "../service/task.service";
import {STATUS} from "angular-in-memory-web-api";
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

  removeTaskFromList(taskId: string): void {
    this.taskService.deleteTask(taskId)
      .then(_data => {
        if (_data.status === STATUS.OK){
          this.getTasksForList(this.listId);}
      });
  }

  addTaskToList(taskDescribe: string) {
    let _newTask: Task = {
      id: null,
      listId: this.listId,
      description:  taskDescribe
    };
    this.taskService.addTask(_newTask)
      .then(_data => {
        if (_data.status === STATUS.OK){
          this.getTasksForList(this.listId);
          this.hideNewTaskCard();
        }
      });

  }

  showNewTaskCard(): void {
    this.newTaskCardVisible = true;
  }

  hideNewTaskCard(): void {
    this.newTaskCardVisible = false;
    this.newTaskDescription = null;
  }
}
