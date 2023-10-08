import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChipModel, ChipToggleModel } from './chip.model';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ChipComponent {
  @Input() item!: ChipModel;
  @Output() selectedChange = new EventEmitter<ChipToggleModel>();
  selected = false;

  toggleChip(): void {
    this.selected = !this.selected;
    this.selectedChange.emit({
      id: this.item.id,
      select: this.selected,
    });
  }
}
