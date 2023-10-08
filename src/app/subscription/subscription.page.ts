import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SummaryComponent } from './components/summary/summary.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionDTO } from '../dto/subscription.dto';
import { SubscriptionFormService } from './service/subscription-form.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
  standalone: true,
  imports: [IonicModule, SummaryComponent, SubscriptionFormComponent],
})
export class SubscriptionPage {
  private readonly subscriptionForm = inject(SubscriptionFormService);
  private readonly subscriptionService = inject(SubscriptionService);
  readonly form = this.subscriptionForm.getForm();

  onSubmit() {
    console.log(this.form.value);
    const formValue = this.form.value;
    this.subscriptionService.createSubscription(formValue as SubscriptionDTO).subscribe()
  }
}
