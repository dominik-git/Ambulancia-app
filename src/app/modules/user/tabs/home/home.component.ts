import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullName: string = "";

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.fullName = this.authService.getFullName();
  }
}
