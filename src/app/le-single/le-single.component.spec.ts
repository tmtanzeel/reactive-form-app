import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeSingleComponent } from './le-single.component';

describe('LeSingleComponent', () => {
  let component: LeSingleComponent;
  let fixture: ComponentFixture<LeSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
