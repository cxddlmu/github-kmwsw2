import { Component, OnInit } from "@angular/core";
import handyScroll from "handy-scroll";
@Component({
  selector: "app-handy-scroll",
  templateUrl: "./handy-scroll.component.html",
  styleUrls: ["./handy-scroll.component.css"]
})
export class HandyScrollComponent implements OnInit {
  constructor() {}

  ngOnInit() {

  }
  ngAfterViewInit(){
    let handscrollsContainer = document.getElementById("handscrolls");
    // let handscrolls = handscrollsContainer.getElementsByTagName("img");
    // Widget initialization
    handyScroll.mount(handscrollsContainer);

    // document
    //   .getElementById("handscrolls-nav")
    //   .addEventListener("click", ({ target }) => {
    //     if (target.matches("span:not(.active)")) {
    //       Array.from(target.parentNode.children).forEach((span, index) => {
    //         let isActive = span === target;
    //         span.classList.toggle("active", isActive);
    //         handscrolls[index].classList.toggle("active", isActive);
    //       });
    //       handscrollsContainer.scrollLeft = handscrollsContainer.scrollWidth;
    //       // Force widget update programmatically
    //       handyScroll.update(handscrollsContainer);
    //     }
    //   });
  }
  
}
