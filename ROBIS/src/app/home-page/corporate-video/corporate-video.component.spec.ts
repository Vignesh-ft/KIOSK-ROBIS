import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateVideoComponent } from './corporate-video.component';

describe('CorporateVideoComponent', () => {
  let component: CorporateVideoComponent;
  let fixture: ComponentFixture<CorporateVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
