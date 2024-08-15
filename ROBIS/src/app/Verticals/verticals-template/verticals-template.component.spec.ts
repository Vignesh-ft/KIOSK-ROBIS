import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalsTemplateComponent } from './verticals-template.component';

describe('VerticalsTemplateComponent', () => {
  let component: VerticalsTemplateComponent;
  let fixture: ComponentFixture<VerticalsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalsTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
