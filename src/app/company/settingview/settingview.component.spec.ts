import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingviewComponent } from './Settingview.component';

describe('SettingviewComponent', () => {
  let component: SettingviewComponent;
  let fixture: ComponentFixture<SettingviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});