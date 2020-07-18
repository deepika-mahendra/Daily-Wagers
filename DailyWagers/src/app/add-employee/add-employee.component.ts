import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { ApplicationService } from '../view-requirements/application.service';
import { WorkmappingService } from '../work-mapp/workmapping.service';

import { WorkreqService } from '../add-workrequirement/workreq.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})


export class AddEmployeeComponent implements OnInit {
  workmapping: any;
  workList: any;
  disable:Boolean = true;

  constructor(private applicationService:ApplicationService,
    private workmappigService:WorkmappingService,private workreqService : WorkreqService) { }

  employeeList:any=[];
  applicationdetail:any=[];
  ngOnInit(): void {
   this.workreqService.getWorkreq().subscribe(data =>{
     this.workList = data;
     console.log(this.workList);
   });
   this.appliedwork(this.workList);
  }
  appliedwork(id){
    this.applicationService.getApplication(id).subscribe(data => {
      this.applicationdetail = data;
      console.log(this.applicationdetail);
    })
  }
assignWork(employee_id,req_id){
  this.workmapping.employee_id=employee_id;
  this.workmapping.req_id = req_id;
  this.workmappigService.createWorkmap(this.workmapping).subscribe(data => {
    alert("work assigned");
    console.log(data);
  },
err => console.error(err));
}

}
