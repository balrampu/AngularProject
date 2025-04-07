import { Component,input,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?:string ;
  @Input({required: true}) userID!:string;

constructor(private taskService : TasksService){}
  IsAddingTask : boolean=false;
  

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userID)
  }

  onCompleteTask(id:string){
   // this.tasks = this.tasks.filter((task)=>task.id!==id)
  }

  onStartAddTask(){
    this.IsAddingTask=true;
  }

  OnCancelAddTask(){
    this.IsAddingTask = false;
  }

  onAddTask(taskData :  NewTaskData) {
    // this.tasks.unshift({
    //   id: new Date().getTime().toString(),
    //   userid : this.userID,
    //   title : taskData.title,
    //   summary : taskData.summary,
    //   dueDate : taskData.date
    // })
    this.IsAddingTask = false;
  }

}
