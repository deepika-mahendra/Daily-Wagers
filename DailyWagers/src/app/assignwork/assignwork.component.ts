import { Component, OnInit } from '@angular/core';
import { WorkreqService } from '../add-workrequirement/workreq.service';

import { ApplicationService } from '../view-requirements/application.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { WorkmappingService } from '../work-mapp/workmapping.service';
import { SharedService } from '../login/shared.service';


@Component({
  selector: 'app-assignwork',
  templateUrl: './assignwork.component.html',
  styleUrls: ['./assignwork.component.scss']
})
export class AssignworkComponent implements OnInit {
  assignedwork:any;
  work: any=[];
  workList:any=[];
  end_date: Date;
  req: any;
  docs :any=[];
  constructor(private workreqService:WorkreqService,
    private sharedService:SharedService,
    private applicationService:ApplicationService,
    private _snackBar: MatSnackBar,private router :Router
    ,private fb:FormBuilder,private workmappingService:WorkmappingService) { }
 currentUser:any=[];

  ngOnInit(): void {
    this.getCurrentUser();
    this.getuserworkmapping();
  }
  getuserworkmapping(){
    var todaysDate = new Date();
        this.workmappingService.getWorkmap(this.currentUser._id).subscribe(data=>{
          this.assignedwork=data;
          this.workList=this.assignedwork;
          console.log(this.workList);
    //       this.docs=this.assignedwork.docs;
    //       console.log(this.docs)
    //       this.end_date= new Date(this.docs.req_id.end_dt);
    //       console.log(this.end_date.toDateString());
    //  console.log(this.assignedwork.end_dt.toDateString());
          // if (this.end_date > todaysDate)  {
          //   this.workList=this.assignedwork;
          //   console.log(this.workList);
          // }
    
        },
       err=>console.log(err)) ; 
      }
      getCurrentUser(){
        this.sharedService.currentData.subscribe(data =>{
          this.currentUser = data;
          console.log(this.currentUser);
        });
      }

}
