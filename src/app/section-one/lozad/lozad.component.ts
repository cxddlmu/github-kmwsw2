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
    const observer = lozad(el, {
      load: function(el) {
        console.log("loading element");

        // Custom implementation to load an element
        // e.g. el.src = el.getAttribute('data-src');
      }
    });
    observer.observe();
  }
}
