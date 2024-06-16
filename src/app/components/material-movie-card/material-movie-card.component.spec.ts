import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialMovieCardComponent } from './material-movie-card.component';

describe('MaterialMovieCardComponent', () => {
  let component: MaterialMovieCardComponent;
  let fixture: ComponentFixture<MaterialMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialMovieCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
