import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlaingComponent } from './now-plaing.component';

describe('NowPlaingComponent', () => {
  let component: NowPlaingComponent;
  let fixture: ComponentFixture<NowPlaingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowPlaingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NowPlaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
