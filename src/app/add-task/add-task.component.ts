import { Component, OnInit } from '@angular/core';
import { TaskdataService } from "../taskdata.service";
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent1 implements OnInit {
myform:FormGroup;
  constructor(public _service:TaskdataService,public formbuilder:FormBuilder) { }

  ngOnInit() {
    this.myform=this.formbuilder.group({
      'id':['',Validators.required],
      'title':['',Validators.required],
      'status':['',Validators.required]
    });
  }
ngSubmit()
{
  this._service.addTaskWeb(this.myform.value).subscribe(
    (data:any)=>
    {
      console.log("done");
    }
  );
 
}
 statusValidator(control:FormControl):{[s:string]:boolean}{
if(control.value==="pending"||control.value==="done")
{
  return null;
}
else
{
  return {example:true}
}
  }
}
