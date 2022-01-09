import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { map } from 'rxjs/operators';
import { SearchEmployeeComponent } from "../components/search-employee/search-employee.component";
import { Employee } from '../employee';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/employees');
  }

  insertData(data: any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addEmployee', data);
  }

  deletetData(id: any) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteEmployee/' + id);
  }

  getEmployeeById(id: any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/employee/' + id);
  }

  updateData(id: any, data: any) {
    return this.httpClient.put('http://127.0.0.1:8000/api/updateEmployee/' + id, data);
  }

  autocompleteSearch() {

    return this.httpClient.get('http://127.0.0.1:8000/api/employees')
      .pipe(
        map((response: any) => {
          console.log("autocom (service.ts): ", response);
          return response.map((item: any) => item.name);}))
  }
      

  
}
