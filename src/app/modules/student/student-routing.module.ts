import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {StudentCourseContentComponent} from "./student-course-content/student-course-content.component";
import {StudentAssingnmentComponent} from "./student-assingnment/student-assingnment.component";
import {RegisterCoursesComponent} from "./student-dashboard/register-courses/register-courses.component";
import {NewCoursesComponent} from "./student-dashboard/new-courses/new-courses.component";

const routes: Routes = [
  {path:'',redirectTo:'/student/process/dashboard',pathMatch:'full'},
  {path:'process',loadComponent:()=>import('./student-context/student-context.component').then(c=>c.StudentContextComponent),
    children:[
      {path:'dashboard',loadComponent:()=>import('./student-dashboard/student-dashboard.component').then(c=>c.StudentDashboardComponent),
      children:[

        {path:'register-courses',component:RegisterCoursesComponent},
        {path:'new-courses',component:NewCoursesComponent},
      ]
      },
      {path:'course-content',component:StudentCourseContentComponent},
      {path:'assignment',component:StudentAssingnmentComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
