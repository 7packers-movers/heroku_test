import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public uS : UsersService,public aR:ActivatedRoute) {
    
    if(this.uS.loggedIn()){
      this.uS.autologin()
    }
    this.aR.data.subscribe((data) => {
      console.log("Welcome back : ",data.user.name);
    })
   } 
} 
