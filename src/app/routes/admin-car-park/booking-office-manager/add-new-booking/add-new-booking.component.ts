import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-booking',
  templateUrl: './add-new-booking.component.html',
  styleUrls: ['./add-new-booking.component.css']
})
export class AddNewBookingComponent implements OnInit {
  form_newBook!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form_newBook = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }
  onSubmitAdd() {
    console.log(this.form_newBook.value);
  }

}
