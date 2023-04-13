import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-add-employee',
  templateUrl: './edit-add-employee.component.html',
  styleUrls: ['./edit-add-employee.component.scss']
})
export class EditAddEmployeeComponent implements OnInit {


  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  empForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private dialogRef: MatDialogRef<EditAddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit(): void {
    this.empForm = this.fb.group({
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    })
    this.empForm.patchValue(this.data)
  }

  submitForm() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);

      if(!this.data){
        this.empService.save(this.empForm.value).subscribe({
          next: (res: any) => {
            alert("Employee Add successfully.")
            this.dialogRef.close(true);
          },
          error: (err) => {
            console.error(err);
          }
  
        })
      }else{
        this.empService.update(this.empForm.value.id,this.empForm.value).subscribe({
          next: (res: any) => {
            alert("Employee Update successfully.")
            this.dialogRef.close(true);
          },
          error: (err) => {
            console.error(err);
          }
  
        })

      }
 
    }
  }
}
