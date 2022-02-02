import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  Title = 'Recent Professional Experience';
  constructor(private titleService:Title){
  }
  ngOnInit() {
    this.titleService.setTitle(this.Title + " - Kevin McCalley");
  }
}
