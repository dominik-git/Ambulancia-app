import { Component, OnInit } from '@angular/core';
import {PatientModel} from "../../model/patient.model";
import {PatientResourceServiceService} from "../../services/patient-resource-service.service";
import {OrdersResourceServiceService} from "../../services/orders-resource-service.service";
import {OrderModel} from "../../model/order.model";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'date', 'type', 'phone'];
  dataSource:OrderModel[];

  constructor(private orderResourceServiceService: OrdersResourceServiceService) { }

  ngOnInit(): void {
    this.orderResourceServiceService.getAllOrders().subscribe(
      (response)=>{
        console.log(response);
        this.dataSource = response;
      }
    )
  }

  getTypeOfVisit(type: number): string {
    switch (type) {

      case TypeOfVisit.visit:
        return "Visit"
        break;
      case TypeOfVisit.paragraph:
        return "Paragraph"
        break;
      case TypeOfVisit.prescription:
        return "Prescription"
        break;
      case TypeOfVisit.blood:
        return "Blood"
        break;
      default:
        return "Unknown"
        break;
    }
  }




}

enum TypeOfVisit {
  visit = 1,
  paragraph,
  prescription,
  blood,
}
