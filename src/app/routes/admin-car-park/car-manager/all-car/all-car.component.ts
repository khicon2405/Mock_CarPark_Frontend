import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';
import { CarManagerService } from 'src/app/_services/car-manager.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  PopupDeleteCarComponent,
  PopupEditCarComponent,
} from '../popup-car/popup-car.component';

@Component({
  selector: 'app-all-car',
  templateUrl: './all-car.component.html',
  styleUrls: ['./all-car.component.css'],
})
export class AllCarComponent implements OnInit {
  displayedColumns: string[] = [
    'License Plate',
    'Car Type',
    'Car Color',
    'Company',
    'Parking Lot',
    'Options',
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  dataSource: any;
  constructor(private carSerVice: CarManagerService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getDataAllCar();
    console.log(this.carSerVice.getAllCar());
  }

  getDataAllCar() {
    this.dataSource = new MatTableDataSource(this.carSerVice.getAllCar());
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
