import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SummaryComponent } from './components/summary/summary.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  standalone: true,
  imports: [IonicModule, SummaryComponent, SubscriptionFormComponent],
})
export class SubscriptionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
