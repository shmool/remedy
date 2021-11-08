import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  edit = true;
  mission = 'teach Angular';

  constructor() { }

  ngOnInit(): void {
  }

  saveMission(missionText: string) {
    this.mission = missionText;
    this.edit = false;
  }
}
