import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatergoryOfDrinksComponent } from './catergory-of-drinks.component';

describe('CatergoryOfDrinksComponent', () => {
  let component: CatergoryOfDrinksComponent;
  let fixture: ComponentFixture<CatergoryOfDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatergoryOfDrinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatergoryOfDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
