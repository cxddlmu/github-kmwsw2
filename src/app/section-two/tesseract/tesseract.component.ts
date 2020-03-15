import { Component, OnInit } from '@angular/core';
import { createWorker, createScheduler } from 'tesseract.js';
/**
 * render image word into string
 */
@Component({
  selector: 'app-tesseract',
  templateUrl: './tesseract.component.html',
  styleUrls: ['./tesseract.component.css']
})
export class TesseractComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  title = 'tesseract.js-angular-app';
  ocrResult = 'Recognizing...';
  constructor() {
    this.doOCR();
  }
  async doOCR() {
    const scheduler = createScheduler();
    const worker1 = createWorker();
    const worker2 = createWorker();
    await worker1.load();
    await worker2.load();
    await worker1.loadLanguage('eng');
    await worker2.loadLanguage('eng');
    await worker1.initialize('eng');
    await worker2.initialize('eng');
    scheduler.addWorker(worker1);
    scheduler.addWorker(worker2);
    /** Add 10 recognition jobs */
    const results = await Promise.all(Array(2).fill(0).map(() => (
      scheduler.addJob('recognize', '/assets/images/eng_bw.png')
    )))
    console.log(results);
    await scheduler.terminate(); // It also terminates all workers.

  }
}
