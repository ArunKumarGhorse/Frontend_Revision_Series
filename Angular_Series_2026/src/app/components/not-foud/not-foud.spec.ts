import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoud } from './not-foud';

describe('NotFoud', () => {
  let component: NotFoud;
  let fixture: ComponentFixture<NotFoud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoud],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
