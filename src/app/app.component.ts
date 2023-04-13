import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAddEmployeeComponent } from './edit-add-employee/edit-add-employee.component';
import { EmployeeService } from './service/employee.service';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-app-material';

  displayedColumns: string[] = [
    'id', 
    'firstName', 
    'lastName', 
    'email', 
    'dob', 
    'gender', 
    'education', 
    'company', 
    'experience', 
    'package',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  empList: any;
  constructor(private _dialog: MatDialog, private empService: EmployeeService) { }
  ngOnInit(): void {
    this.getEmployee();
  }

  openAddForm() {
    const dialogRef = this._dialog.open(EditAddEmployeeComponent);
    dialogRef.afterClosed().subscribe({
      next:(val) => {
        if(val){
          this.getEmployee();
        }
      },
      error:console.error
      
    })
  }




  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EditAddEmployeeComponent,{data: data});
    dialogRef.afterClosed().subscribe({
      next:(val) => {
        if(val){
          this.getEmployee();
        }
      },
      error:console.error
      
    })
  }

  getEmployee() {
    this.empService.getAll().subscribe({
      next: (res: any) => {
        this.empList = res;
        console.log(this.empList);
this.dataSource = res;
this.dataSource.sort = this.sort;
this.dataSource.paginator = this.paginator

      },
      error: console.log
    })
  }

  deleteEmployee(id: number){
    this.empService.delete(id).subscribe({
      next:(res:any) =>{
        alert("Data Deleted.");
        this.getEmployee();
      },
      error:console.log
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
