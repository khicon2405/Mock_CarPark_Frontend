import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeManagerService } from 'src/app/_services/employee-manager.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
})
export class NewEmployeeComponent implements OnInit {
  form_newEmp!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeManagerService
  ) {}

  ngOnInit(): void {
    this.form_newEmp = this.fb.group({
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required]],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      sex: ['1', [Validators.required]],
      department: ['employee', [Validators.required]],
    });
  }
  onSubmitAdd() {
    const data = this.form_newEmp.value;
    this.employeeService.createNewEmployee(data).subscribe((res) => {
      console.log(res);
    });

    console.log(data);
  }

  // get email(): string {
  //     return this.form_newEmp
  // }
}
