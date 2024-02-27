import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefetchedComponent } from './prefetched.component';

describe('PrefetchedComponent', () => {
  let component: PrefetchedComponent;
  let fixture: ComponentFixture<PrefetchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrefetchedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrefetchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
