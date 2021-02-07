import { Component, OnInit } from '@angular/core';
import {OrdersResourceServiceService} from "../../../../../core/services/orders-resource-service.service";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {


  selectedOderType: number;
  selectedDate: Date;
  types = [
    {value: 1, viewValue: 'Visit'},
    {value: 2, viewValue: 'Paragraph'},
    {value: 3, viewValue: 'Prescription'},
    {value: 4, viewValue: 'Blood'}
  ];


  constructor(private ordersResourceServiceService: OrdersResourceServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ordersResourceServiceService.addNewOrder(this.selectedOderType,this.selectedDate)

  }


}
