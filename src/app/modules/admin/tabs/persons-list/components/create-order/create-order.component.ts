import { Component, Inject, OnInit, Optional } from '@angular/core';
import { OrdersResourceServiceService } from '../../../../../core/services/orders-resource-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {
  selectedOderType: number;
  selectedDate: Date;
  types = [
    { value: 1, viewValue: 'Visit' },
    { value: 2, viewValue: 'Paragraph' },
    { value: 3, viewValue: 'Prescription' },
    { value: 4, viewValue: 'Blood' },
  ];

  constructor(
    private ordersResourceServiceService: OrdersResourceServiceService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.ordersResourceServiceService.addNewOrderToPacient(this.selectedOderType, this.selectedDate,this.data);
  }
}
