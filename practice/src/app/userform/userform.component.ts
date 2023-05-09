import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  userData:any[]=[];

  array:any[]=[
    {
    'name':'ganesh',
    mob:9075585508,
    'city':'Malkapur'
    }, {
      'name':'shyam',
      mob:9075585508,
      'city':'Malkapur'
      },
      {
        'name':'hemanat',
        mob:9075585508,
        'city':'Malkapur'
        },
        {
          'name':'monu',
          mob:9075585508,
          'city':'Malkapur'
          }
]

  constructor() { }

  ngOnInit(): void {
  }

  getData(data:NgForm){
    // console.log(data);
    this.userData.push(data);
  }

}
