import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:Data [] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getUser().subscribe((data: any[])=>{
    //   this.users = data;
    // })  
  }

  getAllUser(){
    this.dataService.getUser().subscribe((data: any[])=>{
      this.users = data;
    })  
  }
}
