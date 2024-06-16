import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengMovieCardComponent } from './primeng-movie-card.component';

describe('PrimengMovieCardComponent', () => {
  let component: PrimengMovieCardComponent;
  let fixture: ComponentFixture<PrimengMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengMovieCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
