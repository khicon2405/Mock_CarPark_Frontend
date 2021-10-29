import { Component, Inject, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeManagerService } from 'src/app/_services/employee-manager.service';

@Component({
  selector: 'app-popup-edit-employee',
  templateUrl: './popup-edit-employee.component.html',
  styleUrls: ['./popup-all-employee.component.css'],
})
export class PopupEditEmployeeComponent implements OnInit {
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeManagerService
  ) {}
  onSubmitEdit(id:any,form: any) {
    const data = form.value;
    this.employeeService.editEmployee(id,data).subscribe(res => console.log(res))
  }
  ngOnInit(): void {}
}

@Component({
  selector: 'app-popup-delete-employee',
  templateUrl: './popup-delete-employee.component.html',
})
export class PopupDeleteEmployeeComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeManagerService,
    private router: Router
  ) {}

  onSubmitDelete(Id: any) {
    console.log('Deleted: ', Id);
    this.router.navigateByUrl("./admin-hrm/all-employee");
    this.employeeService
      .deleteEmployee(Id)
      .subscribe((res) => console.log(res));
      
  }
}
