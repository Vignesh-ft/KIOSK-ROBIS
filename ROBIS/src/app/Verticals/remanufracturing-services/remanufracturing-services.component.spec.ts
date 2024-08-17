import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemanufracturingServicesComponent } from './remanufracturing-services.component';

describe('RemanufracturingServicesComponent', () => {
  let component: RemanufracturingServicesComponent;
  let fixture: ComponentFixture<RemanufracturingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemanufracturingServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemanufracturingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
