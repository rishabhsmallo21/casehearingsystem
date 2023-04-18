import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgelogComponent } from './judgelog.component';

describe('JudgelogComponent', () => {
  let component: JudgelogComponent;
  let fixture: ComponentFixture<JudgelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
