import { Component, OnInit, ViewChild } from '@angular/core';
    import * as FilePond from 'filepond';
// Import the plugin code
import FilePondPluginFileRename from 'filepond-plugin-file-rename';

// Register the plugin
FilePond.registerPlugin(FilePondPluginFileRename);
// Import the plugin code
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';

// Register the plugin
FilePond.registerPlugin(FilePondPluginImageExifOrientation);

// Import the plugin code
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

// Register the plugin
FilePond.registerPlugin(FilePondPluginFileEncode);

// Import the plugin code
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';

// Import the plugin styles
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';

// Register the plugin
FilePond.registerPlugin(FilePondPluginFilePoster);

// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';


// Register the plugin
FilePond.registerPlugin(FilePondPluginImagePreview);

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {


 
  @ViewChild('myPond',{static:false}) myPond: any;
  ngOnInit(): void {
  }
  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    fileRenameFunction: (file) => {
        return `my_new_name${file.extension}`;
    },
    files: [
        {
            // the server file reference
            source: '12345',

            // set type to local to indicate an already uploaded file
            options: {
                type: 'local',

                // stub file information
                file: {
                    name: 'my-file.png',
                    size: 3001025,
                    type: 'image/png'
                },

                // pass poster property
                metadata: {
                    poster: './poster-image/file.png'
                }
            }
        }
    ]
  }

  pondFiles = [
    'index.html'
  ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }
/**
 * id	Returns the id of the file
serverId	Returns the server id of the file
origin	Returns the origin of the file, either input ( added by user ), limbo ( temporary server file ) or local ( existing server file )
status	Returns the current status of the file, use the FilePond.FileStatus enum to determine the status.
file	Returns the File object
fileExtension	Returns the file extension
fileSize	Returns the size of the file
filename	Returns the full name of the file
filenameWithoutExtension	Returns the name of the file without extension
 */
  pondHandleAddFile(event: any) {
    type fileData={
      [filename:string]:string
    }
    let file:fileData={
      filename:event.pond.getFile().filename,
      id:event.pond.getFile().id,
      fileSize:event.pond.getFile().fileSize,
      fileExtension:event.pond.getFile().fileExtension,
      filenameWithoutExtension:event.pond.getFile().filenameWithoutExtension,
      serverId:event.pond.getFile().serverId,
      origin:event.pond.getFile().origin,
      status:event.pond.getFile().status,
    getFileEncodeDataURL:event.pond.getFile().getFileEncodeDataURL(),
    getFileEncodeBase64String:event.pond.getFile().getFileEncodeBase64String()
    };

    console.log('A file was added', event.pond.getFile().getFileEncodeDataURL());
    console.log('A file was added', event.pond.getFile().getFileEncodeBase64String());
    console.log('A file was added', file);
  }

}