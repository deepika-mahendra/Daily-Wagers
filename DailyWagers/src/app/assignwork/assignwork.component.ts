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
  assignedwork:any=[];
  work: any=[];
  workList:any=[];
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
  getCurrentUser(){
    this.sharedService.currentData.subscribe(data =>{
      this.currentUser = data;
      console.log(this.currentUser);
    });
  }
  getuserworkmapping(){
        this.workmappingService.getWorkmap(this.currentUser._id).subscribe(data=>{
     this.assignedwork=data;
     this.workList=this.assignedwork;
          console.log(this.workList);
        },
       err=>console.log(err)) ; 
      }

}
