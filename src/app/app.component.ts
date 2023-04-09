import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAddEmployeeComponent } from './edit-add-employee/edit-add-employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-app-material';

  constructor(private _dialog: MatDialog){}

  openEditAddForm(){
    this._dialog.open(EditAddEmployeeComponent)
  }
}
