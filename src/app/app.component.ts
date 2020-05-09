import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi i am Parent';

  students:any[]=[
    {id:1,name:'vikas',email:'jain@gmail.com',address:'gwalior'},
    {id:2,name:'viki',email:'jain12@gmail.com',address:'bhind'},
    {id:3,name:'ram',email:'ram@gmail.com',address:'etawah'},
    {id:4,name:'raj',email:'jain@gmail.com',address:'delhi'},



  ];
}
