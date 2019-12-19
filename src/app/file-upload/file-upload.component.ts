import { Component, OnInit, ViewChild } from '@angular/core';
    import * as FilePond from 'filepond';
// Import the plugin code
import FilePondPluginFileRename from 'filepond-plugin-file-rename';

// Register the plugin
FilePond.registerPlugin(FilePondPluginFileRename);

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  ngOnInit(): void {
  }

 
  @ViewChild('myPond',{static:false}) myPond: any;

  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    fileRenameFunction: (file) => {
        return `my_new_name${file.extension}`;
    }
  }

  pondFiles = [
    'index.html'
  ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    type fileData={
      [filename:string]:string
    }
    let file:fileData={};

    file=event.pond.getFile().filename
    console.log('A file was added', event.pond.getFile());
    console.log('A file was added', event.pond.getFile().filename);
    console.log('A file was added', file);
  }

}