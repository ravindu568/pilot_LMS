import { Component } from '@angular/core';
import {
    RegisteredProgrammWidgetComponent
} from "../../widgets/registered-programm-widget/registered-programm-widget.component";

@Component({
  selector: 'app-new-courses',
  standalone: true,
    imports: [
        RegisteredProgrammWidgetComponent
    ],
  templateUrl: './new-courses.component.html',
  styleUrl: './new-courses.component.scss'
})
export class NewCoursesComponent {

}
