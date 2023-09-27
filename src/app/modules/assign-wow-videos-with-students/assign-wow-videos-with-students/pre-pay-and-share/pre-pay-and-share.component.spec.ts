import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePayAndShareComponent } from './pre-pay-and-share.component';

describe('PrePayAndShareComponent', () => {
  let component: PrePayAndShareComponent;
  let fixture: ComponentFixture<PrePayAndShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrePayAndShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePayAndShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
