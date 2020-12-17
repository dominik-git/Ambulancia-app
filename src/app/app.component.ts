import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ambulancia-app';
  public currentUser: any;
  userStatus = this.firebaseService.userStatus;

  constructor(private firebaseService: AuthService) {
    this.userStatus = this.firebaseService.userStatus;

  }

  ngOnInit(){
    this.firebaseService.userChanges();

    this.firebaseService.userStatusChanges.subscribe(x => this.userStatus = x);
    console.log(this.userStatus)
  }

  logout(){
    this.firebaseService.logOut();

  }



}
