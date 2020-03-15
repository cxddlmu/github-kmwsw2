import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-youdao',
  templateUrl: './youdao.component.html',
  styleUrls: ['./youdao.component.css']
})
export class YoudaoComponent implements OnInit {

  matches = true;


  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.matches = true;
        } else {
          this.matches = false;
        }
      });
  }

}
