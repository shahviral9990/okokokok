import {Routes,RouterModule} from "@angular/router";
import { DemoComponent} from "./demo/demo.component";
import {FormComponent} from "./form/form.component";
import { TasksComponent } from "./tasks/tasks.component";

import { AddTaskComponent1 } from "./add-task/add-task.component";
const route:Routes=[
    {
        path:'',redirectTo:'/forms',pathMatch:'full'
    },
    {
        path:'forms',component:TasksComponent
    },
    {
        path:'demo',component:AddTaskComponent1
    }
];

export const router=RouterModule.forRoot(route);