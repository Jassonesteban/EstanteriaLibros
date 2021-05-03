import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButtomsPage } from './buttoms.page';

describe('ButtomsPage', () => {
  let component: ButtomsPage;
  let fixture: ComponentFixture<ButtomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
