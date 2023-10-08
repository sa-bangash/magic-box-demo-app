import { Injectable, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionFormService {
  private readonly fb = inject(FormBuilder);
  getForm() {
    return this.fb.nonNullable.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      childName: ['', [Validators.required]],
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
