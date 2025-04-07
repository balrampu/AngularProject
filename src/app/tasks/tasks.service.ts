import { inject, Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";
@Injectable({providedIn:'root'})
export class TasksService {
    private tasks = [
        {
          id : 't1',
          userid : 'u1',
          title : 'Master Angular',
          summary : "Learn all basics and advanced feature",
          dueDate : "2025-04-07"
    
        },
        {
          id : 't2',
          userid : 'u1',
          title : 'Master Angular',
          summary : "Learn all basics and advanced feature",
          dueDate : "2025-04-07"
    
        },
        {
          id : 't3',
          userid : 'u3',
          title : 'Master dotnet',
          summary : "Learn all basics and advanced feature",
          dueDate : "2025-04-07"
    
        },
        {
          id : 't4',
          userid : 'u3',
          title : 'Master react',
          summary : "Learn all basics and advanced feature",
          dueDate : "2025-04-07"
    
        },
      ];
      getUserTasks(userId: string){
        return this.tasks = this.tasks.filter((task)=>task.id!==userId)
      }

      addTask(taskData : NewTaskData, userId : string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userid : userId,
            title : taskData.title,
            summary : taskData.summary,
            dueDate : taskData.date
          })
      }

      removeTask(id : string){
        this.tasks = this.tasks.filter((task)=>task.id!==id)

      }
}