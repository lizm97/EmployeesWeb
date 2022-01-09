import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  items: string[] ;
  employees: any;
  employee = new Employee();

  constructor(private dataService: DataService) {
    this.items=["Liz","Shemi"]
   }

  ngOnInit(): void {
    this.getEmployeesData();
  }


  getEmployeesData() {
    this.dataService.getData().subscribe(res => {
      this.employees = res;
    });
  }


  deleteData(id: any) {
    this.dataService.deletetData(id).subscribe(res => {
      this.getEmployeesData();
    })

  }
}

