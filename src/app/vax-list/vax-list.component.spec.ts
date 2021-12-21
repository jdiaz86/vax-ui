import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaxListComponent } from './vax-list.component';

describe('VaxListComponent', () => {
  let component: VaxListComponent;
  let fixture: ComponentFixture<VaxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaxListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
