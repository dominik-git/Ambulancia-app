import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private firebaseService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logOut();

  }

}
