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
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577963382225&di=4cd3e6f96659512e213c7a40370ce1cd&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20200102%2F66%2F307688541549362682.jpg", // path to image
        title: "Image Caption 1" // If you skip it, there will display the original image name(image1)
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
  ngOnInit() {
    // build images array
    
  }
}
