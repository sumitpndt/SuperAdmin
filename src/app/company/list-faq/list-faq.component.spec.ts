import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListfaqComponent } from './list-faq.component';

describe('ListfaqComponent', () => {
  let component: ListFaqComponent;
  let fixture: ComponentFixture<ListFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
