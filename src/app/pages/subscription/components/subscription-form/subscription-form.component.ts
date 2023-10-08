import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { ChipComponent } from 'src/app/shared';
import { ChipToggleModel } from 'src/app/shared/ui-component/chip/chip.model';
@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ChipComponent, ReactiveFormsModule, FormsModule],
})
export class SubscriptionFormComponent {
  @Input()
  form!: FormGroup;
  @Output()
  readonly onSubmit = new EventEmitter();

  private readonly subscriptionService = inject(SubscriptionService);
  readonly topics$ = this.subscriptionService.fetchTopics();

  onSelectChange(value: ChipToggleModel) {
    if (value.select) {
      this.topicCtrl.push(new FormControl(value.id));
    } else {
      const topicIndex = this.topicCtrl?.value.indexOf(value.id);
      if (topicIndex > -1) this.topicCtrl.removeAt(topicIndex);
    }
  }

  get topicCtrl() {
    return this.form.get('topics') as FormArray;
  }

  onClickSubmit() {
    this.onSubmit.emit();
  }
}
