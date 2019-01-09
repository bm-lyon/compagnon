import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosExpoPage } from './infos-expo.page';

describe('InfosExpoPage', () => {
  let component: InfosExpoPage;
  let fixture: ComponentFixture<InfosExpoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosExpoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosExpoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
