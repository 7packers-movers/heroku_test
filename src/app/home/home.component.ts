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
  }

  ngOnInit(): void {    
     
    console.log("home");
    
  }

}
