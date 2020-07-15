import { Component, OnInit } from '@angular/core';
import { WorkreqService } from '../add-workrequirement/workreq.service';

@Component({
  selector: 'app-user-work-card',
  templateUrl: './user-work-card.component.html',
  styleUrls: ['./user-work-card.component.scss']
})
export class UserWorkCardComponent implements OnInit {
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
