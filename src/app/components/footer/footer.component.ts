import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        MatIcon
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
