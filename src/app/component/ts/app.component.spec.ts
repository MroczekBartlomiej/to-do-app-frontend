import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {DebugElement} from "@angular/core";

describe('App component ', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ], // declare the test component
    })
      .compileComponents();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    debugElement = fixture.debugElement.query(By.css('div'))
    htmlElement = debugElement.nativeElement;
  });

    it('true is true', function () {
      console.log('TEST')
      return expect(false).toBe(true); });
  });


