import { Component, OnInit } from "@angular/core";
import * as handyScroll from 'handy-scroll'
@Component({
  selector: "app-handy-scroll",
  templateUrl: "./handy-scroll.component.html",
  styleUrls: ["./handy-scroll.component.css"]
})
export class HandyScrollComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let handscrollsContainer = document.getElementById("handscrolls");
    let handscrolls = handscrollsContainer.getElementsByTagName("img");
    handscrollsContainer.scrollLeft = handscrollsContainer.scrollWidth;

    // Widget initialization
    handyScroll.mount(handscrollsContainer);

    document
      .getElementById("handscrolls-nav")
      .addEventListener("click", ({ target }) => {
        if (target.matches("span:not(.active)")) {
          Array.from(target.parentNode.children).forEach((span, index) => {
            let isActive = span === target;
            span.classList.toggle("active", isActive);
            handscrolls[index].classList.toggle("active", isActive);
          });
          handscrollsContainer.scrollLeft = handscrollsContainer.scrollWidth;
          // Force widget update programmatically
          handyScroll.update(handscrollsContainer);
        }
      });

    document
      .getElementById("handscrolls-toggle")
      .addEventListener("click", ({ target }) => {
        // Checking whether the widget is mounted or not
        let mounted = handyScroll.mounted(handscrollsContainer);
        target.classList.toggle("disabled", mounted);
        // Unmount/remount the widget
        handyScroll[mounted ? "destroy" : "mount"](handscrollsContainer);
      });
  }
}
