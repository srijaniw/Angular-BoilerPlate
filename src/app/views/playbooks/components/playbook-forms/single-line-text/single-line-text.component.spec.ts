import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLineTextComponent } from './single-line-text.component';

describe('SingleLineTextComponent', () => {
  let component: SingleLineTextComponent;
  let fixture: ComponentFixture<SingleLineTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLineTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLineTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
