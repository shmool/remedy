import { StrorageService } from './../../strorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  edit = true;
  mission = '';

  constructor(private storageService: StrorageService) { }

  ngOnInit(): void {
    this.mission = this.storageService.getFromLocalStorage('mission') || '';
    this.edit = this.mission === '';
  }

  saveMission(missionText: string) {
    this.mission = missionText;
    this.edit = false;
    this.storageService.saveToLocalStorage('mission', missionText);
  }
}
