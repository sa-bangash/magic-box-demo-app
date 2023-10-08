import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SummaryComponent } from './components/summary/summary.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { FormBuilder } from '@angular/forms';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionDTO } from '../dto/subscription.dto';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
  standalone: true,
  imports: [IonicModule, SummaryComponent, SubscriptionFormComponent],
})
export class SubscriptionPage {
  private readonly fb = inject(FormBuilder);
  private readonly subscriptionService = inject(SubscriptionService);
  readonly form = this.getForm();

  onSubmit() {
    console.log(this.form.value);
    const formValue = this.form.value;
    this.subscriptionService.createSubscriptoin(formValue as SubscriptionDTO);
  }

  private getForm() {
    return this.fb.nonNullable.group({
      name: [''],
      email: [''],
      childName: [''],
      dob: this.fb.nonNullable.group({
        date: [''],
        month: [''],
        year: [''],
      }),
      grade: [''],
      topics: this.fb.array<string>([]),
    });
  }
}
