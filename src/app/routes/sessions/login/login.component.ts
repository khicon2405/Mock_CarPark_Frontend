import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      passWord: ['', [Validators.required]],
    });
  }
  goHRM() {
    this.router.navigate(['/admin-hrm']);
  }
  goCarpark() {
    this.router.navigate(['/admin-car-park']);
  }
  onSubmit(template: TemplateRef<void>) {
    console.log('Submited');
    console.log(this.loginForm);
    this.dialog.open(template);
    this.loginForm.reset();
  }
}
