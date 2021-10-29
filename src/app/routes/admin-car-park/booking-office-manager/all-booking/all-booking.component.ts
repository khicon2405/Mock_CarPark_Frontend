import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BookingOfficeService } from 'src/app/_services/booking-office.service';
import { PopupDeleteCarComponent, PopupEditCarComponent } from '../popup-booking/popup-car.component';

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.css']
})
export class AllBookingComponent implements OnInit {
  displayedColumns: string[] = [
    'License Plate',
    'Car Type',
    'Car Color',
    'Company',
    'Parking Lot',
    'Options',
  ];
  dataSource: any;
  constructor(private bookingOfficeSerVice: BookingOfficeService, public dialog: MatDialog) { }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.getDataAllCar();
    console.log(this.bookingOfficeSerVice.getAllCar());
  }

  getDataAllCar() {
    this.dataSource = new MatTableDataSource(this.bookingOfficeSerVice.getAllCar());
  }

  onDeleteItem(e: any) {
    console.log('Delete: ', e);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.height = '400px';
    dialogConfig.data = {
      element: e,
    };
    this.dialog.open(PopupDeleteCarComponent, dialogConfig);
  }
  onEditItem(e: any) {
    console.log('Edit: ', e);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50vw';
    dialogConfig.height = '60vh';
    dialogConfig.data = e;
    this.dialog.open(PopupEditCarComponent, dialogConfig);
  }
}
