import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelocomeComponentComponent } from './welocome-component.component';

describe('WelocomeComponentComponent', () => {
  let component: WelocomeComponentComponent;
  let fixture: ComponentFixture<WelocomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelocomeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelocomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
