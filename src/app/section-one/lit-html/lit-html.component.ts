import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { html, render } from 'lit-html';

@Component({
  selector: 'app-lit-html',
  templateUrl: './lit-html.component.html',
  styleUrls: ['./lit-html.component.css']
})
export class LitHtmlComponent implements OnInit {

  constructor() { }
  @ViewChild('litHtml', { static: false }) showDiv: ElementRef
  ngOnInit() {
    this.user.name = 'Kevin';
    this.user.age = 12;
  }
  user={name:'',age:0};
  ngAfterViewInit() {
    // This is a lit-html template function. It returns a lit-html template.
    const helloTemplate = (user) => html`<div>Hello ${user.name}!</div>`;

    // This renders <div>Hello Steve!</div> to the document body
    render(helloTemplate({name:'Steve'}), this.showDiv.nativeElement);

    // This updates to <div>Hello Kevin!</div>, but only updates the ${name} part
    // render(helloTemplate('Kevin'), this.showDiv.nativeElement);
  }

}