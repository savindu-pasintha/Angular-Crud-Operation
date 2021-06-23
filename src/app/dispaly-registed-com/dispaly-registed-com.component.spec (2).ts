import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyRegistedComComponent } from './dispaly-registed-com.component';

describe('DispalyRegistedComComponent', () => {
  let component: DispalyRegistedComComponent;
  let fixture: ComponentFixture<DispalyRegistedComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispalyRegistedComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispalyRegistedComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
