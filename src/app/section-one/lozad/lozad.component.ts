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
    

  }

  ngAfterViewInit(){
        const el = document.querySelector("img");
    const observer = lozad(el, {
      threshold: 0.1,
      load: function(el) {
            el.src = el.getAttribute("data-src");
            el.onload = function() {
                console.log((el.localName.toUpperCase() + " " + el.getAttribute("data-index") + " lazy loaded."))
            }
        }
    });
    observer.observe();
  }
}
