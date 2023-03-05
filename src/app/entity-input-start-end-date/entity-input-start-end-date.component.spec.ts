import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityInputStartEndDateComponent } from './entity-input-start-end-date.component';

describe('EntityInputStartEndDateComponent', () => {
  let component: EntityInputStartEndDateComponent;
  let fixture: ComponentFixture<EntityInputStartEndDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityInputStartEndDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityInputStartEndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
