import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  alert:boolean=false;

    employees: any;
    employee = new Employee();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }
  insertData() {
    this.dataService.insertData(this.employee).subscribe(res => {
      this.getEmployeesData();
      this.alert=true;
    })
  }
  getEmployeesData() {
    this.dataService.getData().subscribe(res => {
      this.employees = res;
    });
  }
  removeAlert(){
    this.alert=false;
  }
}
