import { Component, OnInit } from '@angular/core';

interface gender {
  value: string;
  viewValue: string;
}
interface skill {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})

export class ViewProfileComponent implements OnInit {

  
  selectedValue: string;
  select: string;
  constructor() { }

  ngOnInit(): void {
  }
  genders: gender[] = [
    {value: 'female', viewValue: 'Female'},
    {value: 'male', viewValue: 'Male'},
  
  ];
  skills: skill[] = [
    {value: 'Teaching', viewValue: 'Teaching'},
    {value: 'serving food', viewValue: 'serving food'},
    {value: 'Household Work', viewValue: 'Household Work'},
    {value: 'Brick Working', viewValue: 'Brick Working'},
    {value: 'Painting Drywall', viewValue: 'Painting Drywall'},
    
  ];

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
