import { Component, OnInit } from '@angular/core';
import { Task } from "../task";
import { TaskdataService } from "../taskdata.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
demo:Task=new Task("10","hjghjgsfa","done");
  constructor(public _data:TaskdataService,public _router:Router ) { }

  ngOnInit() {

  }
onClick(){
  
  this._data.addTask(this.demo);
  this._router.navigate(["/forms"]);
}
}
