import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonStandaloneComponent } from './non-standalone.component';

describe('NonStandaloneComponent', () => {
  let component: NonStandaloneComponent;
  let fixture: ComponentFixture<NonStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
