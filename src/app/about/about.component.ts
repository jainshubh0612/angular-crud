import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
  }
  userId:number
  addUser(user){
    this.dataService.addUser(user).subscribe((data: any[])=>{
      console.log(data)
      
    }) 
  }
}
