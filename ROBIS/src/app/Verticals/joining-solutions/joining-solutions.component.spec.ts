import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningSolutionsComponent } from './joining-solutions.component';

describe('JoiningSolutionsComponent', () => {
  let component: JoiningSolutionsComponent;
  let fixture: ComponentFixture<JoiningSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoiningSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoiningSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
