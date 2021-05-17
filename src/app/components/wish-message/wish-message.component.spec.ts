import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WishMessageComponent } from './wish-message.component';

describe('WishMessageComponent', () => {
  let component: WishMessageComponent;
  let fixture: ComponentFixture<WishMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WishMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
