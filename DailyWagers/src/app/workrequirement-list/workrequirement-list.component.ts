import { Component, OnInit } from '@angular/core';
import { WorkreqService } from '../add-workrequirement/workreq.service';
import { WorkReq } from '../add-workrequirement/skill';

@Component({
  selector: 'app-workrequirement-list',
  templateUrl: './workrequirement-list.component.html',
  styleUrls: ['./workrequirement-list.component.scss']
})
export class WorkrequirementListComponent implements OnInit {

  workreqList : WorkReq[];
  constructor(private workreqService : WorkreqService) { }
  displayedColumns: string[] = ['title','employer','location','skill_req','worker_req','duration','payment','start_dt','end_dt','isActive'];
  dataSource = [];

  ngOnInit(): void {
    this.getworkList();
  }
  getworkList(){
    this.workreqService.getWorkreq().subscribe(res=>{
      this.workreqList=res;
      
      this.dataSource = this.workreqList;
      console.log(this.workreqList)
    })
  }

}
