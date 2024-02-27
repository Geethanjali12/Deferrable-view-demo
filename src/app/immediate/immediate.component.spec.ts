import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmediateComponent } from './immediate.component';

describe('ImmediateComponent', () => {
  let component: ImmediateComponent;
  let fixture: ComponentFixture<ImmediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmediateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImmediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
