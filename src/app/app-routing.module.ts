import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { HistoryComponent } from './history/history.component';
import { OverviewComponent } from './overview/overview.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';

const routes: Routes = [
  { path: '', component: OverviewComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'education', component: EducationComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'highlights', component: HighlightsComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'overview', component: OverviewComponent},
  { path: 'strengths', component: StrengthsComponent},
  { path: 'accessibility', component: AccessibilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
