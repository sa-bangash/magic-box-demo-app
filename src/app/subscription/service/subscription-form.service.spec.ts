import { TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubscriptionFormService } from './subscription-form.service';

describe('SubscriptionFormService', () => {
  let service: SubscriptionFormService;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [SubscriptionFormService],
    });
    service = TestBed.inject(SubscriptionFormService);
    formBuilder = TestBed.inject(FormBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a valid form', () => {
    const form = service.getForm();

    // Assert that the form and its controls are created
    expect(form).toBeTruthy();
    expect(form.get('name')).toBeTruthy();
    expect(form.get('email')).toBeTruthy();
    expect(form.get('childName')).toBeTruthy();
    expect(form.get('dob')).toBeTruthy();
    expect(form.get('grade')).toBeTruthy();
    expect(form.get('topics')).toBeTruthy();
  });

  it('should return a form with empty initial values', () => {
    const form = service.getForm();
    // Assert that initial values are empty
    expect(form.get('name')?.value).toBe('');
    expect(form.get('email')?.value).toBe('');
    expect(form.get('childName')?.value).toBe('');
  });
});
