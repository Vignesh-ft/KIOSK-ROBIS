import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalsVideoComponent } from './verticals-video.component';

describe('VerticalsVideoComponent', () => {
  let component: VerticalsVideoComponent;
  let fixture: ComponentFixture<VerticalsVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalsVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
