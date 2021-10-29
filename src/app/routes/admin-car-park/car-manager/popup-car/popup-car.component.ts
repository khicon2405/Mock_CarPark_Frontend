import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-edit-car',
  templateUrl: './popup-edit-car.component.html',
  styleUrls: ['./popup-car.component.css'],
})
export class PopupEditCarComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  onSubmitEdit(form: any) {
    console.log(form.controls);
  }
  ngOnInit(): void {}
}

@Component({
  selector: 'app-popup-delete-car',
  templateUrl: './popup-delete-car.component.html',
})
export class PopupDeleteCarComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
