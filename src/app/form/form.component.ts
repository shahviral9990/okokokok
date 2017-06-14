import { Component, OnInit } from '@angular/core';
import {task} from './tasks';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model={'id':'','name':'','status':''};
arr:task[]=[
  new task('1','eat','done'),
   new task('2','eat','done'),
    new task('3','eat','done'),
     new task('4','eat','done')
];
  constructor() { }
  add()
  {
    this.arr.push(this.model);
    this.model={'id':'','name':'','status':''};
  }
delete(item)
{
  this.arr.splice(this.arr.indexOf(item),1);
}
update(item)
{
  if(this.arr[item].status=="done")
  this.arr[item].status="ok";
}
  ngOnInit() {
  }

}
