import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { BreathComponent } from './main/breath/breath.component';
import { GratitudeComponent } from './main/gratitude/gratitude.component';
import { MissionComponent } from './main/mission/mission.component';
import { AboutComponent } from './main/about/about.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'breathe', component: BreathComponent},
  {path: 'express-gratitude/:id', component: GratitudeComponent },
  {path: 'express-gratitude', redirectTo: 'express-gratitude/1' },
  {path: 'focus-on-mission', component: MissionComponent },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
