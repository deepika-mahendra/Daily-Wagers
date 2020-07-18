import { Component, OnInit } from '@angular/core';
import { Employer } from '../add-employer/employer';
import { EmployerService } from '../add-employer/employer.service';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.scss']
})
export class EmployerListComponent implements OnInit {
  employerList : Employer[];
  constructor(private employerService : EmployerService) { }
  displayedColumns: string[] = ['name','location','contact','alternate','Office_email','type','point_of_contact','isActive'];
  dataSource = [];
  ngOnInit(): void {
    this. getEmployeeList();
  }
  getEmployeeList(){
    this.employerService.getEmployer().subscribe(res=>{
      this.employerList=res;
      
      this.dataSource = this.employerList;
      console.log(this.employerList)
    })
  }
}
