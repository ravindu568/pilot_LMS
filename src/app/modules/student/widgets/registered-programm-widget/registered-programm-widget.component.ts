import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-registered-programm-widget',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './registered-programm-widget.component.html',
  styleUrl: './registered-programm-widget.component.scss'
})
export class RegisteredProgrammWidgetComponent {
  @Input() name:string='';
  date = new Date();
}
