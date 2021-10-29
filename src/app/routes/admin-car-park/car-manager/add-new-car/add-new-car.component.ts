import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {
  form_newEmp!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form_newEmp = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }
  onSubmitAdd() {
    console.log(this.form_newEmp.value);
  }

}
