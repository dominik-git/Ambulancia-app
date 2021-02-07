import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {FormControl} from "@angular/forms";
import {OrdersResourceServiceService} from "../../../core/services/orders-resource-service.service";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {MatDialog} from "@angular/material/dialog";
import {CreateOrderComponent} from "./components/create-order/create-order.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'date', 'type', 'phone'];
  dataSource: MatTableDataSource<{ date: { nanoseconds: number; seconds: number }; firstName: string; lastName: string; phone: string; dob: Date; examined: boolean; id: string; type: number; email?: string }>;
  date = new FormControl(new Date());
  selectedDate: Date;
  isSpinnerVisible: boolean;

  constructor(private orderResourceServiceService: OrdersResourceServiceService,private dialog: MatDialog) {
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
      this.isSpinnerVisible = false
    });
  }

  openOrderModal(){
    const dialogRef = this.dialog.open(CreateOrderComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}

enum TypeOfVisit {
  visit = 1,
  paragraph,
  prescription,
  blood,
}
