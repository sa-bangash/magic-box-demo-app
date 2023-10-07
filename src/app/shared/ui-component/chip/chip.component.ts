import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ChipComponent {
  @Input() label!: string;
  @Output() selectedChange = new EventEmitter<boolean>();
  selected = false;

  toggleChip(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
