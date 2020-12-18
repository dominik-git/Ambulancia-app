import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {PatientModel} from "../model/patient.model";

@Injectable({
  providedIn: 'root'
})
export class PatientResourceServiceService {


  constructor(private firestore: AngularFirestore) {

  }

  getAllPatients(){
    const patientCollection = this.firestore.collection('patients');
    return patientCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as PatientModel;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

}
