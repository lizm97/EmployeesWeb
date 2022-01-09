import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    {
      linkId: 1,
      linkName: 'Employees',
      linkUrl:''
    },
    {
      linkId: 2,
      linkName: 'Add Employee',
      linkUrl:'addEmployee'
    },
    {
    linkId: 3,
    linkName: 'Search Employee',
    linkUrl:'searchEmployee'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
