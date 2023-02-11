import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainshopFormComponent } from './brainshop-form.component';

describe('BrainshopFormComponent', () => {
  let component: BrainshopFormComponent;
  let fixture: ComponentFixture<BrainshopFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainshopFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrainshopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
