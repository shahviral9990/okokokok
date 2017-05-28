import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
x:string="veer";
s:string="";
bool:boolean=true;
ans:number=0;
  constructor() { }
fun()
{
  this.x=this.x+"clicked";
}
cal(a ,b,c )
{
  if(a=="")
a=0;
if(b=="")
b=0;
b=parseInt(b+"");
  a=parseInt(a+"");
if(c=="+")
this.ans=a + b;
else if(c=="-")
this.ans=a - b;
else if(c=="*")
this.ans=a * b;
else
this.ans=a / b;
}
  ngOnInit() {
  }

}
