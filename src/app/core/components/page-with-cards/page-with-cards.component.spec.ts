/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageWithCardsComponent } from './page-with-cards.component';

describe('PageWithCardsComponent', () => {
  let component: PageWithCardsComponent;
  let fixture: ComponentFixture<PageWithCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWithCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
