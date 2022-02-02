import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  Title = 'Overview';
  constructor(private titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle(this.Title + " - Kevin McCalley");
  }
}
