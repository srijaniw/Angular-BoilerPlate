import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tabTitle: string;
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template;
  @Input() dataContext;

  constructor() { }

  ngOnInit() {
  }

}
