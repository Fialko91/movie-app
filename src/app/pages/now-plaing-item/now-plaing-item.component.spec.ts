import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlaingItemComponent } from './now-plaing-item.component';

describe('NowPlaingItemComponent', () => {
  let component: NowPlaingItemComponent;
  let fixture: ComponentFixture<NowPlaingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowPlaingItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NowPlaingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
