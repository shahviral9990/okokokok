import { Component, OnInit } from '@angular/core';
import {task} from '../form/tasks';
import { AngularService } from "../angular.service";
@Component({
  selector: 'app-firetask',
  templateUrl: './firetask.component.html',
  styleUrls: ['./firetask.component.css']
})
export class FiretaskComponent implements OnInit {
 model={'id':'','name':'','status':''};
 arr:task[]=[];
  constructor(public _service:AngularService) { }
add()
{
  this._service.addProduct(this.model).subscribe(
    (data:any)=>
    {
      console.log("done");
    }
  );
}
  ngOnInit() {
    this._service.getAllProduct().subscribe(
      (data:task[])=>{
        
        this.arr=data;
        console.log(this.arr);
      });
  }

}
