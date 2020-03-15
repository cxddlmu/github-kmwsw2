import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-file-saver',
  templateUrl: './file-saver.component.html',
  styleUrls: ['./file-saver.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileSaverComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "hello world.txt");
  }

}
