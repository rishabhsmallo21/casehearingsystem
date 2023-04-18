import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcaseComponent } from './newcase.component';

describe('NewcaseComponent', () => {
  let component: NewcaseComponent;
  let fixture: ComponentFixture<NewcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
