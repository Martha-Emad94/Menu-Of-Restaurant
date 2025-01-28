import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfMenuComponent } from './details-of-menu.component';

describe('DetailsOfMenuComponent', () => {
  let component: DetailsOfMenuComponent;
  let fixture: ComponentFixture<DetailsOfMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOfMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
