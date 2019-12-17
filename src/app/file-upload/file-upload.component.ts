import { Component, OnInit } from '@angular/core';
    import * as FilePond from 'filepond';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {

const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create( inputElement );
  }

}