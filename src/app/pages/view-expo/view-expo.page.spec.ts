import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpoPage } from './view-expo.page';

describe('ViewExpoPage', () => {
  let component: ViewExpoPage;
  let fixture: ComponentFixture<ViewExpoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExpoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExpoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
