import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfDrinksComponent } from './details-of-drinks.component';

describe('DetailsOfDrinksComponent', () => {
  let component: DetailsOfDrinksComponent;
  let fixture: ComponentFixture<DetailsOfDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOfDrinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
