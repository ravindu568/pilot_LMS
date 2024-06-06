import { Component } from '@angular/core';
import {FooterComponent} from "../../../components/footer/footer.component";
import {RouterLink} from "@angular/router";
import {NewProgrammeWidgetComponent} from "../../student/widgets/new-programme-widget/new-programme-widget.component";
import {
  RegisteredProgrammWidgetComponent
} from "../../student/widgets/registered-programm-widget/registered-programm-widget.component";

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink,
    NewProgrammeWidgetComponent,
    RegisteredProgrammWidgetComponent
  ],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.scss'
})
export class TeacherDashboardComponent {

}
