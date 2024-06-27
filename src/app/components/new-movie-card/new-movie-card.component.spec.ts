import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieCardComponent } from './new-movie-card.component';

describe('NewMovieCardComponent', () => {
  let component: NewMovieCardComponent;
  let fixture: ComponentFixture<NewMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMovieCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
