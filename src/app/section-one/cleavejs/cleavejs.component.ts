import { Component, OnInit } from "@angular/core";
import Cleave from "cleave.js";

@Component({
  selector: "app-cleavejs",
  templateUrl: "./cleavejs.component.html",
  styleUrls: ["./cleavejs.component.css"]
})
export class CleavejsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    const cleave = new Cleave(".input-phone", {
      date: true,
      delimiter: "-",
      datePattern: ["Y", "m", "d"]
    });
  }
}
