import { Component } from '@angular/core';
import {LessonWidgetComponent} from "../widgets/lesson-widget/lesson-widget.component";

@Component({
  selector: 'app-student-course-content',
  standalone: true,
  imports: [
    LessonWidgetComponent
  ],
  templateUrl: './student-course-content.component.html',
  styleUrl: './student-course-content.component.scss'
})
export class StudentCourseContentComponent {

  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);
}
