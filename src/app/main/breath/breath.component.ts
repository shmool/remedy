import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
import {MatSliderChange} from '@angular/material/slider';

const COUNT = 5;
const ITERATIONS = 2;

@Component({
  selector: 'app-breath',
  templateUrl: './breath.component.html',
  styleUrls: ['./breath.component.scss'],
  animations: [
    trigger('timerChange', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 })),
      ]),
      transition('* => *', [
        animate('400ms', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class BreathComponent implements OnInit {
  iteration = 1;
  counter = COUNT;
  interval = 7800;
  @HostBinding("style.--spin")
  @Input() spin = this.interval/1000+'s';

  @HostBinding("style.--transform")
  @Input() transform = 'matrix(0,0,0,0)';

  constructor() {
    // while (this.count === 5) {

    // }
   }

  ngOnInit(): void {
    // this.spin();
    this.count();
  }

  count() {
    setTimeout(() => {
      this.counter--;
      if (this.counter === 0) {
        if (this.iteration < ITERATIONS) {
          this.iteration++;
          this.counter = COUNT;
          this.count();
        }
      }
      else {
        this.count();
      }
    } , this.interval);
  }

  changeInterval(e: MatSliderChange) {
    // console.log(transform);
    // this.prevSpinnerVal = this.interval;
    // clearTimeout(this.timeoutId);
    // this.count();
    this.interval = e.value || 5000;
    // console.log(requestAnimationFrame(this.spinningElem.nativeElement));
    // this.transform = getComputedStyle(this.spinningElem.nativeElement).transform;
    this.spin = this.interval/1000+'s';
  }
}
