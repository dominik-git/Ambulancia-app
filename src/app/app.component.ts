import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userStatus = this.firebaseService.userStatus;

  constructor(private firebaseService: AuthService) {
    this.userStatus = this.firebaseService.userStatus;
  }

  ngOnInit() {
    this.firebaseService.userChanges();
    this.firebaseService.userStatusChanges.subscribe((x) => (this.userStatus = x));
  }

  logout() {
    this.firebaseService.logOut();
  }
}
