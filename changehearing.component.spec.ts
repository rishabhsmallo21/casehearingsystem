import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangehearingComponent } from './changehearing.component';

describe('ChangehearingComponent', () => {
  let component: ChangehearingComponent;
  let fixture: ComponentFixture<ChangehearingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangehearingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangehearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
