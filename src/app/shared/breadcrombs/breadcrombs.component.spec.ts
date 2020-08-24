import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrombsComponent } from './breadcrombs.component';

describe('BreadcrombsComponent', () => {
  let component: BreadcrombsComponent;
  let fixture: ComponentFixture<BreadcrombsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrombsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrombsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
