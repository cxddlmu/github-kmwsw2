/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TesseractComponent } from './tesseract.component';

describe('TesseractComponent', () => {
  let component: TesseractComponent;
  let fixture: ComponentFixture<TesseractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesseractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesseractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
