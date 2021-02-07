import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {OrderModel} from "../model/order.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class OrdersResourceServiceService {

  constructor(private firestore: AngularFirestore, private authService:AuthService) {
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
    let endDate = new Date(searchDate);
    endDate.setDate(endDate.getDate() + 1);
    let endDateTimeStamp = this.toTimestamp(endDate);
    const ordersCollection = this.firestore.collection('orders',
      ref => ref
        .where('date.seconds', '>=', startDateTimeStamp)
        .where('date.seconds', '<=', endDateTimeStamp)
        .orderBy('date.seconds')
    )
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

  addNewOrder(type: number, date:Date){
    const myDate = date.toLocaleString()
    const seconds = +new Date(myDate) /1000;
    const ordersCollection = this.firestore.collection('orders');
    const user = this.authService.currentUser;
    let newOrder = new OrderModel();
    newOrder.type = type;
    newOrder.examined = false;
    // const seconds = date.getTime() / 1000;
    const timestamp = {
      nanoseconds: 0,
      seconds
    };
    newOrder.date = timestamp;
    newOrder.email = user.username;
    newOrder.firstName = user.firstName;
    newOrder.lastName = user.lastName;
    console.log(newOrder);
    ordersCollection.doc().set({...newOrder})
      .then(() => {
        console.log("Document successfully written!");
      } )
      .catch( (error) => {
        console.error("Error writing document: ", error);
      });

  }


}
