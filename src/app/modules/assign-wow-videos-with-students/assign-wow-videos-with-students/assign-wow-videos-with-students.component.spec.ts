import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignWowVideosWithStudentsComponent } from './assign-wow-videos-with-students.component';

describe('AssignWowVideosWithStudentsComponent', () => {
  let component: AssignWowVideosWithStudentsComponent;
  let fixture: ComponentFixture<AssignWowVideosWithStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignWowVideosWithStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignWowVideosWithStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
