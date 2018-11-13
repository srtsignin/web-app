import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipRowComponent } from './membership-row.component';

describe('MembershipRowComponent', () => {
  let component: MembershipRowComponent;
  let fixture: ComponentFixture<MembershipRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
