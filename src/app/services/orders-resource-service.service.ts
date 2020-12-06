import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {PatientModel} from "../model/patient.model";
import {OrderModel} from "../model/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrdersResourceServiceService {

  constructor(private firestore: AngularFirestore) {

  }

  getAllOrders(){
    const ordersCollection = this.firestore.collection('orders');
    return ordersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as OrderModel;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

}
