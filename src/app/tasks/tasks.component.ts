import { Component, OnInit } from '@angular/core';
import { Task } from "../task";
import { TaskdataService } from "../taskdata.service";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public _taskdata:TaskdataService ) { }
arr:Task[]=[];
  ngOnInit() {
   this.arr= this._taskdata.getAllTask();
  }

}
