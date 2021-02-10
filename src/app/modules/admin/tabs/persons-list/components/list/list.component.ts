import {Component, OnInit, ViewChild} from '@angular/core';
import {PatientResourceServiceService} from "../../../../../core/services/patient-resource-service.service";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {UpdateModalComponent} from "../update-modal/update-modal.component";
import {RegisterComponent} from "../register/register.component";
import {CreateOrderComponent} from "../create-order/create-order.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'dob', 'email', 'phone','action'];
  dataSource: MatTableDataSource<{ firstName: string; lastName:string, phone: string; dob: string; email: string }>;
  isSpinnerVisible: boolean;
  clients:any =[];

  constructor(private patientResourceServiceService: PatientResourceServiceService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.isSpinnerVisible = true
    this.patientResourceServiceService.getAllPatients().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      console.log(response)
      this.clients = response;
      this.isSpinnerVisible = false
    });
  }


  openCreateOrderWindow(row){
    const dialogRef = this.dialog.open(CreateOrderComponent,{data:row});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log(row);
  }

  openUpdateWindow(row){
    const dialogRef = this.dialog.open(RegisterComponent,{data:row});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log(row);
  }

}
