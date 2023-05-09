import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

   selectedCategory='';
    myarray:any[]=[]
   fav:string=''
    
   sports=[
    {id:1,name:"Cricket",isSelected:false},
   {id:2,name:"Football",isSelected:false},
   {id:3,name:"Kho-Kho",isSelected:false},
   {id:4,name:"Table Tennice",isSelected:false}
  ]  

  movies=[
  {id:1, name:"OM Shanti Om", isSelected: false},
  {id:2, name:"Tiger", isSelected: false},
  {id:3, name:"RRR", isSelected: false},
  {id:3, name:"KGF", isSelected: false}]
   
  constructor() { }

  ngOnInit(): void {
  }
   
  onRadioClick(category:string){
    this.selectedCategory=category;
  }

  OnSportsChange(){
    this.fav='';
    for(let st of this.sports){
      if(st['isSelected']){
        this.fav += st['name']
      }
    }
    
    }

  OnMovieChange(){
   this.fav='';
   for(let st of this.movies){
    if(st['isSelected']){
      this.fav += st['name'];
    }
   }
    
}
}
