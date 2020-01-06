import { Component, OnInit } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
@Component({
  selector: 'app-editor-js',
  templateUrl: './editor-js.component.html',
  styleUrls: ['./editor-js.component.css']
})
export class EditorJSComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const editor = new EditorJS({ 
  /** 
   * Id of Element that should contain the Editor 
   */ 
  holderId: 'editorjs', 
  
  /** 
   * Available Tools list. 
   * Pass Tool's class or Settings object for each Tool you want to use 
   */ 
  tools: { 
    header: Header, 
    list: List 
  }, 
})

  }

}