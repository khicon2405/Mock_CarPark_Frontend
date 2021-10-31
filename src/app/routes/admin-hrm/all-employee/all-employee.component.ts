import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/_models/employee';
import { EmployeeManagerService } from 'src/app/_services/employee-manager.service';
import { PopupDeleteEmployeeComponent, PopupEditEmployeeComponent } from './popup-all-employee/popup-all-employee.component';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css'],
})
export class AllEmployeeComponent implements OnInit {
  displayedColumns: string[] = [
    'Index',
    'User Name',
    'Name',
    'Sex',
    'Email',
    'Phone',
    'Address',
    'Options',
  ];
  dataSourse: any;
  dataTest: any;
  constructor(private employeeService: EmployeeManagerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    
    this.getAllEmployeeApi();
  }

  

  getAllEmployeeApi() {
    // this.employeeService.getAllEmployeeApi().subscribe((res: any) => {
    //   console.log(res);
    //   this.dataSourse = new MatTableDataSource(res);
    // });
    this.dataSourse = new MatTableDataSource(this.employeeService.getAllEmployeeApi())
  }

  openPopupEdit(e: Employee) {
    console.log("Edit: ", e);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50vw';
    dialogConfig.height = '60vh';
    dialogConfig.data = e;
    this.dialog.open(PopupEditEmployeeComponent, dialogConfig)

  }

  openPopupDelete(e: Employee) {
    console.log('Delete: ', e);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.height = '400px';
    dialogConfig.data = e;
    this.dialog.open(PopupDeleteEmployeeComponent, dialogConfig);
  }
}
