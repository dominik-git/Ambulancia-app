import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PatientModel} from "../../model/patient.model";
import {PatientResourceServiceService} from "../../services/patient-resource-service.service";
import {OrdersResourceServiceService} from "../../services/orders-resource-service.service";
import {OrderModel} from "../../model/order.model";
import * as moment from 'moment';
import {MatSort, MatSortable} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'date', 'type', 'phone'];
  dataSource:MatTableDataSource<{ date: Date; firstName: string; lastName: string; phone: string; id: string; type: number }>;

  constructor(private orderResourceServiceService: OrdersResourceServiceService) { }

  ngOnInit(): void {
    this.orderResourceServiceService.getAllOrders().subscribe(
      (response)=>{
        console.log(response );
        // this.dataSource = response;
        this.dataSource =new MatTableDataSource(response);
        this.dataSource.sortingDataAccessor = (item, property) => {
          console.log(item)
          switch (property) {
            case 'date': {
              // @ts-ignore
              return new Date(item.date.seconds * 1000);
            }
            default: return item[property];
          }
        };

        this.dataSource.sort = this.sort;

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
