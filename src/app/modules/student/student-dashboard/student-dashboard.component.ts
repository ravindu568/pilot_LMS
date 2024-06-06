import { Component } from '@angular/core';
import {FooterComponent} from "../../../components/footer/footer.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {
  RegisteredProgrammWidgetComponent
} from "../widgets/registered-programm-widget/registered-programm-widget.component";
import {NewProgrammeWidgetComponent} from "../widgets/new-programme-widget/new-programme-widget.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {NbButtonModule} from "@nebular/theme";

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    FooterComponent,
    MatTabGroup,
    MatTab,
    RegisteredProgrammWidgetComponent,
    NewProgrammeWidgetComponent,
    RouterLink,
    NbButtonModule,
    RouterOutlet
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {

}
