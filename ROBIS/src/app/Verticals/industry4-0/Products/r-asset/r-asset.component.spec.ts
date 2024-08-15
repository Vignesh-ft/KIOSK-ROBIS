import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAssetComponent } from './r-asset.component';

describe('RAssetComponent', () => {
  let component: RAssetComponent;
  let fixture: ComponentFixture<RAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RAssetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
