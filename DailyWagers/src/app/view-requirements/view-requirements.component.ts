import { Component, OnInit } from '@angular/core';
import { WorkreqService } from '../add-workrequirement/workreq.service';

@Component({
  selector: 'app-view-requirements',
  templateUrl: './view-requirements.component.html',
  styleUrls: ['./view-requirements.component.scss']
})
export class ViewRequirementsComponent implements OnInit {
  workList:any=[];

  constructor(private workreqService:WorkreqService) { }

  ngOnInit(): void {
    this.getEmployers();
  }


  getEmployers(){
    this.workreqService.getWorkreq().subscribe(data => {
  this.workList = data;
  console.log(this.workList);
    },
    err=> console.log(err))
  }
}
