import { StepsService } from '../../steps.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nextStep$ = this.stepsService.nextStep$;

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
  }

}
