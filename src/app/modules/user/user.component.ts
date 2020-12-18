import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/services/auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private firebaseService: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.firebaseService.logOut();

  }

}
