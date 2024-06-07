import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilliamComponent } from './william.component';

describe('WilliamComponent', () => {
  let component: WilliamComponent;
  let fixture: ComponentFixture<WilliamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilliamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WilliamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
