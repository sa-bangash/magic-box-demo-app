import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SummaryComponent } from './components/summary/summary.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
  standalone: true,
  imports: [IonicModule, SummaryComponent, SubscriptionFormComponent],
})
export class SubscriptionPage{}
