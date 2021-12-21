import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaxDetailComponent } from './vax-detail.component';

describe('VaxDetailComponent', () => {
  let component: VaxDetailComponent;
  let fixture: ComponentFixture<VaxDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaxDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
