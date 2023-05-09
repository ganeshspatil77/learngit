import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  display:any=[{
    name:'',
    amount:''
  }];

  constructor() { }

  ngOnInit(): void {
  }

  onsend(val:string,amt:string){
    this.display.name=val;
    this.display.amount=amt;
  }

}
