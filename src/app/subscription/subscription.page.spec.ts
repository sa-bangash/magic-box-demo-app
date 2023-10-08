import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SubscriptionPage } from './subscription.page';
import { SubscriptionFormService } from './service/subscription-form.service';
import { SubscriptionService } from '../services/subscription.service';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { SubscriptionDTO } from '../dto/subscription.dto';

describe('SubscriptionPage', () => {
  let component: SubscriptionPage;
  let fixture: ComponentFixture<SubscriptionPage>;
  let subscriptionFormService: SubscriptionFormService;
  let subscriptionService: SubscriptionService;
  let formBuilder: FormBuilder;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SubscriptionPage, IonicModule.forRoot()],
      providers: [SubscriptionFormService, SubscriptionService, FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionPage);
    component = fixture.componentInstance;
    subscriptionFormService = TestBed.inject(SubscriptionFormService);
    subscriptionService = TestBed.inject(SubscriptionService);
    formBuilder = TestBed.inject(FormBuilder);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call SubscriptionService.createSubscription when onSubmit is called', () => {
    const mockFormValue = {
      // Mock form values here
      name: 'ahmad',
      email: 'ahmad@g.com',
      childName: 'kamran',
      dob: {
        date: '1',
        month: '10',
        year: '2000',
      },
      topics: [],
      grade: '1',
    };

    const subcriptionServiceSpy = spyOn(
      subscriptionService,
      'createSubscription'
    ).and.returnValue(of(mockFormValue))

    component.form.setValue(mockFormValue);
    component.onSubmit();

    expect(subcriptionServiceSpy).toHaveBeenCalledWith(
      mockFormValue
    );
  });
});
