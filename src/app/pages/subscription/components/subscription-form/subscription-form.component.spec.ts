import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriptionFormComponent } from './subscription-form.component';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { ChipToggleModel } from 'src/app/shared/ui-component/chip/chip.model';
import { of } from 'rxjs';
import { SubscriptionFormService } from '../../service/subscription-form.service';
import { RouterModule } from '@angular/router';

describe('SubscriptionFormComponent', () => {
  let component: SubscriptionFormComponent;
  let fixture: ComponentFixture<SubscriptionFormComponent>;
  const subscriptionServiceMock = {
    fetchTopics: () => of([]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionFormComponent, RouterModule],
      providers: [
        { provide: SubscriptionService, useValue: subscriptionServiceMock },
        SubscriptionFormService
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionFormComponent);
    component = fixture.componentInstance;
    const subscriptionFormService = TestBed.inject(SubscriptionFormService);
    component.form = subscriptionFormService.getForm();
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle topics when onSelectChange is called', () => {
    const chipToggleModel: ChipToggleModel = {
      id: 1,
      select: true,
    };
    fixture.detectChanges();

    component.onSelectChange(chipToggleModel);
    const topicCtrl = component.topicCtrl;

    expect(topicCtrl.length).toBe(1);
    expect(topicCtrl.value[0]).toBe(1);

    chipToggleModel.select = false;
    component.onSelectChange(chipToggleModel);

    expect(topicCtrl.length).toBe(0);
  });

});
