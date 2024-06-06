import { Component } from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink} from "@angular/router";
import {CdkAccordion, CdkAccordionItem} from "@angular/cdk/accordion";

@Component({
  selector: 'app-lesson-widget',
  standalone: true,
  imports: [
    MatListItem,
    MatNavList,
    RouterLink,
    CdkAccordion,
    CdkAccordionItem
  ],
  templateUrl: './lesson-widget.component.html',
  styleUrl: './lesson-widget.component.scss'
})
export class LessonWidgetComponent {
  // fillerNav = Array.from({length: 5}, (_, i) => `Content+${i + 1}`);
  // fillerContent = Array.from(
  //   {length: 9},
  //   (_,i) =>
  //     `Content+${i + 1}`
  // );
  // items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  items=Array.from({length: 10}, (_, i) => `item ${i + 1}`);
  expandedIndex = 0;

}
