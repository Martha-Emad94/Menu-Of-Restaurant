import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOfMealsComponent } from './category-of-meals.component';

describe('CategoryOfMealsComponent', () => {
  let component: CategoryOfMealsComponent;
  let fixture: ComponentFixture<CategoryOfMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryOfMealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryOfMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
