import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor'
@Component({
  selector: 'app-froala-editor',
  templateUrl: './froala-editor.component.html',
  styleUrls: ['./froala-editor.component.css']
})
export class FroalaEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
     new FroalaEditor('div#froala-editor', {
    dragInline: false,
    pluginsEnabled: ['image', 'link', 'draggable']
  })
  }

}