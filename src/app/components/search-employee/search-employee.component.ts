import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { debounceTime } from 'rxjs/operators';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  employees: any;
  employeesJson:any;
  //employee = new Employee();
  //employee:any;
  formGroup: FormGroup=new FormGroup({});
  dataToSearch:string;
  filteredOptions:any;


  constructor(private dataService: DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    
    console.log("employees in OnInit: ", this.employees);
    this.getEmployeesData();
    this.getEmployeeNames();

  }
  ngOnChanges():void{
    console.log("onChanges");
    this.getEmployeeNames();
  }

  initForm() {
    this.formGroup = this.fb.group({
      'employee' : ['']
    })
    this.formGroup.get('employee')?.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(response => {
      console.log('entered data is ', response);
      console.log('formGroup is ', this.formGroup);

      if(response && response.length){
        this.filterData(response);
        console.log("you entered to the IF");
      } else {
        this.filteredOptions = [];
      }
      console.log("filteredOptions : ", this.filteredOptions[0]);
    })
  }

  filterData(enteredData:any) {
    console.log("filterData employees : ", this.employeesJson);
    this.filteredOptions = this.employeesJson.filter((item: any) => {
      return item.name.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getEmployeesData() {
    this.dataService.getData().subscribe(res => {
      this.employeesJson = res;
    });
  }

    getEmployeeNames() {
      this.dataService.autocompleteSearch().subscribe(response => {
         this.employees = response;
         console.log("this.employees(getEmployeeNames) = ", this.employees);
      });
      }
  

  search(event:any){
    this.dataToSearch=event.target.value;
    console.log(this.dataToSearch);
  }

  deleteData(id: any) {
    this.dataService.deletetData(id).subscribe(res => {
      this.getEmployeeNames();
      console.log("id deleted: " , id)
    })
    
  }
}
