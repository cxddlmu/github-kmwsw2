import { Component, OnInit } from "@angular/core";
import PhotoViewer from "photoviewer";

@Component({
  selector: "app-photoviewer",
  templateUrl: "./photoviewer.component.html",
  styleUrls: ["./photoviewer.component.css"]
})
export class PhotoviewerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // build images array
    var items = [
      {
        src: "path/to/image1.jpg", // path to image
        title: "Image Caption 1" // If you skip it, there will display the original image name(image1)
      },
      {
        src: "path/to/image2.jpg",
        title: "Image Caption 2"
      }
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
}
