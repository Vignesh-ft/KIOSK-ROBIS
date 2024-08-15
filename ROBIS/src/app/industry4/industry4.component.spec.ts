import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Industry4Component } from './industry4.component';

describe('Industry4Component', () => {
  let component: Industry4Component;
  let fixture: ComponentFixture<Industry4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Industry4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Industry4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
