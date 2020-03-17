import { Component, OnInit } from '@angular/core';
import { createWorker, createScheduler } from 'tesseract.js';
/**
 * render image word into string
 */
@Component({
  selector: 'app-simplebar',
//   templateUrl: './tesseract.component.html',
//   styleUrls: ['./tesseract.component.css']
    template:`
   
    <ngx-simplebar [options]="options">
  <div *ngFor="let number of numbers">ngx-simplebar</div>
</ngx-simplebar>

    `,
     styles: [``]
})
export class SimplebarComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  numbers=Array(100).fill(1);
  options={
    //   forceVisible:true
    scrollbarMinSize:1
  }
  constructor() {
//    this.numbers=[].fill(1,1,100);
  }
  
}
