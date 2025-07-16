import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent implements OnInit {

  Title = 'Accessibility';
  constructor(private titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle(this.Title + " - Kevin McCalley");
  }

}
