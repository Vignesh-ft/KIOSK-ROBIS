import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmRobotAndAccessoriesComponent } from './imm-robot-and-accessories.component';

describe('ImmRobotAndAccessoriesComponent', () => {
  let component: ImmRobotAndAccessoriesComponent;
  let fixture: ComponentFixture<ImmRobotAndAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImmRobotAndAccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmRobotAndAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
