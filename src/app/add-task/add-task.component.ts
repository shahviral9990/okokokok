import { Component, OnInit, ElementRef, Input, ViewChild  } from '@angular/core';
import { TaskdataService } from "../taskdata.service";
import { Http } from '@angular/http';
import {  Response } from '@angular/http';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent1 implements OnInit {
myform:FormGroup;
  constructor( private el: ElementRef,public _service:TaskdataService,private http: Http,public formbuilder:FormBuilder) { }
  public uploader:FileUploader = new FileUploader({url: 'http://localhost:3000/upload', itemAlias: 'sampleFiles'});
abc(val)
{
 // console.log(val.files[0]);
 this._service.postimage(val.files[0]).subscribe(
    (data:any)=>
    {
      console.log("done");
    }
  );

} 
  ngOnInit() {
    this.myform=this.formbuilder.group({
      'id':['',Validators.required],
      'title':['',Validators.required],
      'status':['',Validators.required]
    });
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
       //overide the onCompleteItem property of the uploader so we are 
       //able to deal with the server response.
       this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
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
