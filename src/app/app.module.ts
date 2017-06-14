import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header.component';
import { router } from "./app.route";
import { TasksComponent } from './tasks/tasks.component';
import { TaskdataService } from "./taskdata.service";
import { AddTaskComponent } from './tasks/add-task.component';
import { AddTaskComponent1 } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FormComponent,
    HeaderComponent,
    TasksComponent,
    AddTaskComponent,
    AddTaskComponent1
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    ReactiveFormsModule
  ],
  providers: [TaskdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
