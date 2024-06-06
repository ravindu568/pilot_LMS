import { Routes } from '@angular/router';
import {LoginTeacherComponent} from "./components/login-teacher/login-teacher.component";

export const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',loadComponent:()=>import('./components/login/login.component').then(c=>c.LoginComponent),pathMatch:'full'
  },
  {path:'signup',loadComponent:()=>import('./components/signup/signup.component').then(c=>c.SignupComponent),pathMatch:'full'},
  {path:'login-teacher',loadComponent:()=>import('./components/login-teacher/login-teacher.component').then(c=>c.LoginTeacherComponent),pathMatch:'full'},
  {path:'student',loadChildren:()=>import('./modules/student/student.module').then(m=>m.StudentModule)},
  {path:'teacher',loadChildren:()=>import('./modules/teacher/teacher.module').then(m=>m.TeacherModule)},
  {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
  {path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then(c=>c.NotfoundComponent)},

];
