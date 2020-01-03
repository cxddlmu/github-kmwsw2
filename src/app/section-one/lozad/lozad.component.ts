import { Component, OnInit } from "@angular/core";
import lozad from "lozad";
@Component({
  selector: "app-lozad",
  templateUrl: "./lozad.component.html",
  styleUrls: ["./lozad.component.css"]
})
export class LozadComponent implements OnInit {
  constructor() {}

  ngOnInit() {
     const el = document.querySelector("img");
    const observer = lozad('.lozad', {
      load: function(el) {
            el.src = el.getAttribute("data-src");
            el.onload = function() {
                console.log((el.localName.toUpperCase() + " " + el.getAttribute("data-index") + " lazy loaded."))
            }
        }
    });
    observer.observe();

  }

  ngAfterViewInit(){
       
  }
}
