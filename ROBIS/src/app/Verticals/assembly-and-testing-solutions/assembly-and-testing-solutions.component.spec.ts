import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyAndTestingSolutionsComponent } from './assembly-and-testing-solutions.component';

describe('AssemblyAndTestingSolutionsComponent', () => {
  let component: AssemblyAndTestingSolutionsComponent;
  let fixture: ComponentFixture<AssemblyAndTestingSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssemblyAndTestingSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyAndTestingSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
