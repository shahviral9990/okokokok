import { Injectable } from '@angular/core';
import { Task } from "./task";
import 'rxjs/Rx';
import { Http,Response,Headers,RequestOptions } from "@angular/http";
@Injectable()
export class TaskdataService {

  constructor(private http:Http) { }
arr:Task[]=[
  new Task("1","sfgsdf","done"),
  new Task("2","jhhjkhk","pending")
];
url:string="https://ngbackend.herokuapp.com/task/";
addTaskWeb(item)
{
  let body=JSON.stringify(item);
  let header=new Headers({'Content-Type':'application/json'});
  let req=new RequestOptions({headers:header});
  
    return this.http.post(this.url,body,req).map(
    (data:Response)=>data.json()
  );
}
postimage(item)
{ console.log(item);
  let body=item;
  let header=new Headers({'Content-Transfer-Encoding': 'utf-8' });
  let req=new RequestOptions({headers:header});
  console.log(body);
  return this.http.post(this.url,body,req).map(
    (data:Response)=>data.json()
  );
}

  getAllTask(){

    return this.arr;
  }
  deleteTask(item:Task){

    this.arr.splice(this.arr.indexOf(item),1);
  }
  addTask(item:Task){
    this.arr.push(item);
  }
}
