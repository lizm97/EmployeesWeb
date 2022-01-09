import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { SearchEmployeeComponent } from "./components/search-employee/search-employee.component";

const routes: Routes = [
    { path: '', component: EmployeesComponent},
    { path: 'addEmployee', component: AddEmployeeComponent},
    {path: 'searchEmployee', component: SearchEmployeeComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}