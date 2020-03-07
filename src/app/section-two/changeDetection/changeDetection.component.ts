import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BoxComponent } from './box.omponent';

@Component({
  selector: 'app-changeDetection',
  templateUrl: './changeDetection.component.html',
  styleUrls: ['./changeDetection.component.css']
})
export class ChangeDetectionComponent implements OnInit {
  currentId
  currentBoxComponent: BoxComponent = null;
  boxes = [];
  offsetX;
  offsetY;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = {
        id,
        x,
        y
      };
      this.boxes.push(box);
    }
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detach();
  }
  mouseDown(event) {
    const boxComponent = event.target['BoxComponent'];
    if (boxComponent) {
      const box = boxComponent.box;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      this.offsetX = box.x - mouseX;
      this.offsetY = box.y - mouseY;

      this.currentBoxComponent = boxComponent;

      boxComponent.selected = true;
      boxComponent.update();
    }
  }
  mouseMove(event) {
    event.preventDefault();
    if (this.currentBoxComponent !== null) {
      this.updateBox(this.currentBoxComponent, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }
  mouseUp($event) {
    if (this.currentBoxComponent) {
      this.currentBoxComponent.selected = false;
      this.currentBoxComponent.update();
    }
    this.currentBoxComponent = null;
  }
  updateBox(boxComponent, x, y) {
    boxComponent.box.x = x;
    boxComponent.box.y = y;
    boxComponent.update();
  }
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}