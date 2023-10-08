import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: true,
})
export class SummaryComponent {
  @Output()
  onSubmit = new EventEmitter();

  onClickSumit() {
    this.onSubmit.emit();
  }
}
