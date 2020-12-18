import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
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

  toTimestamp(strDate){
    const datum = Date.parse(strDate);
    return datum/1000;
  }

  getOrdersByDate(searchDate: Date){
    let startDateTimeStamp = this.toTimestamp(searchDate)
    console.log(searchDate);
    let endDate = new Date(searchDate);
    endDate.setDate(endDate.getDate() + 1);
    let endDateTimeStamp = this.toTimestamp(endDate);
    console.log(endDate);
    const ordersCollection = this.firestore.collection('orders',
      ref => ref
        .where('date.seconds', '>=', startDateTimeStamp)
        .where('date.seconds', '<=', endDateTimeStamp)
    );
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

  updateExamined(id: string, state: boolean){
    const ordersCollection = this.firestore.collection('orders');
   return ordersCollection.doc(id).update({examined: state});

  }


}
