import { Component, OnInit } from "@angular/core";
import PhotoViewer from "photoviewer";

@Component({
  selector: "app-photoviewer",
  templateUrl: "./photoviewer.component.html",
  styleUrls: ["./photoviewer.component.scss"]
})
export class PhotoviewerComponent implements OnInit {
  constructor() {}
  test($event){
    $event.preventDefault();
    console.log($event.target);
    var items = [
      {
        src: "https://raw.githubusercontent.com/ApoorvSaxena/lozad.js/master/demo/images/thumbs/02.jpg", // path to image
        title: "Image Caption 1" // If you skip it, there will display the original image name(image1)
      },
            {
        src: "https://raw.githubusercontent.com/ApoorvSaxena/lozad.js/master/demo/images/thumbs/03.jpg", // path to image
        title: "Image Caption 1" // If you skip it, there will display the original image name(image1)
      },
            {
        src: "https://raw.githubusercontent.com/ApoorvSaxena/lozad.js/master/demo/images/thumbs/04.jpg", // path to image
        title: "Image Caption 1" // If you skip it, there will display the original image name(image1)
      },
    ];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: 0 // this option means you will start at first image
    };

    // Initialize the plugin
    var viewer = new PhotoViewer(items, options);
  }
  ngOnInit() {
    // build images array
    
  }
}
