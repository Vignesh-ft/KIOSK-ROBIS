import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalsCardComponent } from './verticals-card.component';

describe('VerticalsCardComponent', () => {
  let component: VerticalsCardComponent;
  let fixture: ComponentFixture<VerticalsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
