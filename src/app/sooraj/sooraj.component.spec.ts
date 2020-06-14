import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoorajComponent } from './sooraj.component';

describe('SoorajComponent', () => {
  let component: SoorajComponent;
  let fixture: ComponentFixture<SoorajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoorajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoorajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
