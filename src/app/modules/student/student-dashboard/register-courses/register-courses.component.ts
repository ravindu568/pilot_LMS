import { Component } from '@angular/core';
import {
  RegisteredProgrammWidgetComponent
} from "../../widgets/registered-programm-widget/registered-programm-widget.component";

@Component({
  selector: 'app-register-courses',
  standalone: true,
  imports: [
    RegisteredProgrammWidgetComponent
  ],
  templateUrl: './register-courses.component.html',
  styleUrl: './register-courses.component.scss'
})
export class RegisterCoursesComponent {

}
