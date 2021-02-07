import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {PatientModel} from "../model/patient.model";
import {AngularFireAuth} from "@angular/fire/auth";
import {ToastService} from "./toast.service";

@Injectable({
  providedIn: 'root'
})
export class PatientResourceServiceService {


  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private toastService:ToastService) {

  }

  signUp(patient:PatientModel) {
    this.afAuth.createUserWithEmailAndPassword(patient.email, patient.password)
      .then((userResponse) => {
        // add the user to the "users" database
        const {dob,firstName,lastName,gender,phone,email,password} = patient;
        let user = {
          id: userResponse.user.uid,
          username: userResponse.user.email,
          role: "user",
          firstName,
          lastName,
          gender,
          phone,
          password,
          dob,
          email
        }
        //add the user to the database
        this.firestore.collection("users").add(user)
          .then(user => {
            this.toastService.showSuccess("Pacient bol vytvoreny");
          })
          .catch(err => {
            console.log(err);
            this.toastService.showError(err);
          })

      })
      .catch((err) => {
        console.log("An error ocurred: ", err);
        this.toastService.showError(err);
      })

  }

  getAllPatients(){
    const patientCollection = this.firestore.collection('users',
      ref => ref
        .where('role','==', 'user')
      );
    return patientCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as PatientModel;
          const id = a.payload.doc.id;
          console.log(data.id, id);
          return { ...data,id };
        });
      })
    );
  }

  updatePatient(person: PatientModel){
    const id = person.id;
    delete person.id;
     this.firestore.collection('users').doc(id).set({...person},{merge: true}).then(response =>{
       this.toastService.showSuccess("Data boli uspesne zmenene");
     });
  }

}
