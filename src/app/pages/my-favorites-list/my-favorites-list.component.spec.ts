import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoritesListComponent } from './my-favorites-list.component';

describe('MyFavoritesListComponent', () => {
  let component: MyFavoritesListComponent;
  let fixture: ComponentFixture<MyFavoritesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFavoritesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFavoritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
