import { Component } from '@angular/core';



interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-add-employee',
  templateUrl: './edit-add-employee.component.html',
  styleUrls: ['./edit-add-employee.component.scss']
})
export class EditAddEmployeeComponent {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
