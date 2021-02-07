import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {FormControl} from "@angular/forms";
import {OrdersResourceServiceService} from "../../../core/services/orders-resource-service.service";
import {OrderModel} from "../../../core/model/order.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'date', 'type', 'phone', 'action'];
  dataSource: MatTableDataSource<{ date: { nanoseconds: number; seconds: number }; firstName: string; lastName: string; phone: string; dob: Date; examined: boolean; id: string; type: number; email?: string }>;
  date = new FormControl(new Date());
  selectedDate: Date;
  isSpinnerVisible: boolean;
  clients:any =[];

  constructor(private orderResourceServiceService: OrdersResourceServiceService,private http: HttpClient) {
  }

  ngOnInit(): void {
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)
    this.setOrdersByDate(currentDate);


  }


  getTypeOfVisit(type: number): string {
    switch (type) {
      case TypeOfVisit.visit:
        return "Visit"
      case TypeOfVisit.paragraph:
        return "Paragraph"
      case TypeOfVisit.prescription:
        return "Prescription"
      case TypeOfVisit.blood:
        return "Blood"
      default:
        return "Unknown"
    }
  }


  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value
    this.setOrdersByDate(event.value);
  }

  setOrdersByDate(date: Date) {
    this.isSpinnerVisible = true
    this.orderResourceServiceService.getOrdersByDate(date).subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      console.log(response)
      this.clients = response;
      this.isSpinnerVisible = false
    });
  }

  onExaminedButtonClick(id: string, state: boolean, index: number) {
    this.isSpinnerVisible = true
    this.orderResourceServiceService.updateExamined(id, state).then(r => {
      this.sentEmailNotification(index);
    }).catch(err => {
      console.log(err);
    });

  }

  sentEmailNotification(index:number){
    let person: OrderModel;
    if(index+2 <= this.clients.length-1){
      person = this.clients[index+2];
    }else{
      person = this.clients[index];
    }

    const email = person?.email;
    if(email){
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mbjpbdjr',
        { name: 'Istvan', replyto: email, message: 'OBJEDNANO' },
        { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
    }
  }

}

enum TypeOfVisit {
  visit = 1,
  paragraph,
  prescription,
  blood,
}

