import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public uS : UsersService,public aR : ActivatedRoute) { 
    this.aR.data.subscribe((data) => {
      console.log("Welcome back : ",data.user.name);
    })
  }

  ngOnInit(): void {     
    console.log("home");
    
  }

}
