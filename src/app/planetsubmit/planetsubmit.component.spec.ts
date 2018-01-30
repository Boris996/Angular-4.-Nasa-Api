import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsubmitComponent } from './planetsubmit.component';

describe('PlanetsubmitComponent', () => {
  let component: PlanetsubmitComponent;
  let fixture: ComponentFixture<PlanetsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
