import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenComponent } from './when.component';

describe('WhenComponent', () => {
  let component: WhenComponent;
  let fixture: ComponentFixture<WhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
