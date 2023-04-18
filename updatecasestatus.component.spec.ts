import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecasestatusComponent } from './updatecasestatus.component';

describe('UpdatecasestatusComponent', () => {
  let component: UpdatecasestatusComponent;
  let fixture: ComponentFixture<UpdatecasestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecasestatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecasestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
