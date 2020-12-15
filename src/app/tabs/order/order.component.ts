import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PatientModel} from "../../model/patient.model";
import {PatientResourceServiceService} from "../../services/patient-resource-service.service";
import {OrdersResourceServiceService} from "../../services/orders-resource-service.service";
import {OrderModel} from "../../model/order.model";
import * as moment from 'moment';
import {MatSort, MatSortable} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {FormControl} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'date', 'type', 'phone', 'action'];
  dataSource: MatTableDataSource<{ date: Date; firstName: string; lastName: string; phone: string; id: string; type: number }>;
  date = new FormControl(new Date());
  selectedDate: Date;
  isSpinnerVisible: boolean;

  constructor(private orderResourceServiceService: OrdersResourceServiceService) {
  }

  ngOnInit(): void {

    // this.orderResourceServiceService.getAllOrders().subscribe(
    //   (response) => {
    //     this.dataSource = new MatTableDataSource(response);
    //     this.dataSource.sortingDataAccessor = (item, property) => {
    //       switch (property) {
    //         case 'date': {
    //           // @ts-ignore
    //           return new Date(item.date.seconds * 1000);
    //         }
    //         default:
    //           return item[property];
    //       }
    //     };
    //
    //     this.dataSource.sort = this.sort;
    //     this.isSpinnerVisible = false
    //
    //   }
    // )
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

  onExaminedButtonClick(id: string, state: boolean) {
    this.isSpinnerVisible = true
    this.orderResourceServiceService.updateExamined(id, state).then(r => {
    }).catch(err => {
      console.log(err);
    });

  }

}

enum TypeOfVisit {
  visit = 1,
  paragraph,
  prescription,
  blood,
}

