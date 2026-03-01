import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJavi } from './hero-javi';

describe('HeroJavi', () => {
  let component: HeroJavi;
  let fixture: ComponentFixture<HeroJavi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJavi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJavi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
