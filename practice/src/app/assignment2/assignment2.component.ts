import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  itemdata:any[]=[];

  item:any={};
  t:any={};

  price:number=0;
  discount:number=0;
  amount:number=0;
  qty:number=0;
  total:number=0;


  itemarr:any[]=[
    { 
      index:1,
      'item':'ABC',
      price:90
    },
    {
      index:2,
      'item':'PQR',
      price:50
    },
    {
      index:3,
      'item':'XYZ',
      price:900
    },
    {
      index:4,
      'item':'WXY',
      price:100
    }
  ]

  integerRegix = /^\d+$/
  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    const data={item:this.item.item,price:this.price, discount:this.discount, quantity:this.qty, amount:this.amount}
    this.itemdata.push(data);
    this.total=this.total+this.amount;
  }

  onChangeEvent(val:any=undefined){
    console.log(this.item);
    
  this.price=this.item.price;
  }

  CalculateAmt(){
    this.amount=this.price*this.qty-this.discount;

  }

  OnDeleteRow(val:number, amount:number){
    this.itemdata.splice(val,1);
    this.total=this.total - amount;
  }

  

  

}
