import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipComponent } from './chip.component';
import { CommonModule } from '@angular/common';
import { ChipToggleModel } from './chip.model';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, ChipComponent],
    });
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    component.item = {
      id:1,
      name:'Ariabic'
    } 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle chip selection', () => {
    const initialSelectedValue = component.selected;
    const expectedToggleValue = !initialSelectedValue;

    const selectedChange = spyOn(component.selectedChange,'emit')
    component.toggleChip();

    expect(component.selected).toBe(expectedToggleValue);

    const toggleEvent: ChipToggleModel = {
      id: component.item.id,
      select: expectedToggleValue,
    };
    expect(selectedChange).toHaveBeenCalledWith(toggleEvent);
  });
});
