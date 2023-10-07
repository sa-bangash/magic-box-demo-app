import { Component, OnInit } from '@angular/core';
import { ChipComponent } from 'src/app/shared';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
  standalone: true,
  imports: [ChipComponent],
})
export class SubscriptionFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
