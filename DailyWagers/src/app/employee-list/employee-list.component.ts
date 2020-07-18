import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../add-employee/employee.service';
import { Employee } from '../add-employee/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList : Employee[];
  constructor(private employeeService : EmployeeService) { }
  displayedColumns: string[] = ['name','city','contact','email','experience','skills','gender','isActive'];
  dataSource = [];
  ngOnInit(): void {
    this. getEmployeeList();
  }
  getEmployeeList(){
    this.employeeService.getEmployee().subscribe(res=>{
      this.employeeList=res;
      
      this.dataSource = this.employeeList;
      console.log(this.employeeList)
    })
  }

}
