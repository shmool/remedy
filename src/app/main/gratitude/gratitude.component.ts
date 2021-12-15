import { StrorageService } from './../../strorage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.scss']
})
export class GratitudeComponent implements OnInit {
  counter$!: Observable<string | null>;

  constructor(private route: ActivatedRoute, private storageService: StrorageService) {
  }

  ngOnInit(): void {
    this.counter$ = this.route.paramMap.pipe(
      map(params => params.get('id'))
      )
  }

  saveGratitude(e: any) {
    this.storageService.saveGratitude(e.target.value);
    e.target.value = '';
  }

}
