import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterCoursesComponent} from "../student/student-dashboard/register-courses/register-courses.component";
import {NewCoursesComponent} from "../student/student-dashboard/new-courses/new-courses.component";
import {StudentCourseContentComponent} from "../student/student-course-content/student-course-content.component";
import {StudentAssingnmentComponent} from "../student/student-assingnment/student-assingnment.component";
import {TeacherAssignmentUpComponent} from "./teacher-assignment-up/teacher-assignment-up.component";

const routes: Routes = [
  {path:'',redirectTo:'/teacher/process/dashboard',pathMatch:'full'},
  {path:'process',loadComponent:()=>import('./teacher-context/teacher-context.component').then(c=>c.TeacherContextComponent),
    children:[
      {path:'dashboard',loadComponent:()=>import('./teacher-dashboard/teacher-dashboard.component').then(c=>c.TeacherDashboardComponent)},
      {path:'teacher-assignment',component:TeacherAssignmentUpComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
