import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.scss']
})
export class StrengthsComponent implements OnInit {
  Title = 'Key Strengths';
  constructor(private titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle(this.Title + " - Kevin McCalley");
  }
}
