import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  Name:string='';

  a:any[]=[34,87,90,45,23,88];
 

  constructor() { }

  ngOnInit(): void {
  }

onbtnclick(arr:any){
  console.log(this.Name);
 // console.log(this.a.sort())
  arr=this.a;
  for(let i=0; i<arr.length;i++){
    for(let j=0; j<arr.length; j++){
      if(arr[j]>arr[j+i]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  console.log(arr)
}
 




}
