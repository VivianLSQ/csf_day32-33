import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_workshop32';
  taskList: any[] =[];


  //to update list when there is a new task
  updateToDos(newTask: any){

    //to receive task from Output
    console.log(">>>newTask: " + newTask);

    this.taskList.push(newTask);
    console.log(">>> taskList: " + this.taskList);
  }
}
