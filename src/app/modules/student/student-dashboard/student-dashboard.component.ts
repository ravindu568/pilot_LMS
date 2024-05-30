import { Component } from '@angular/core';
import {FooterComponent} from "../../../components/footer/footer.component";

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {

}
