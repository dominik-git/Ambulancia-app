import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private ngZone: NgZone,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);

  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  getFullName(): string{
    return `${this.currentUser.firstName} ${this.currentUser.lastName}`
  }

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.firestore
          .collection('users')
          .ref.where('username', '==', user.user.email)
          .onSnapshot((snap) => {
            snap.forEach((userRef) => {
              this.currentUser = userRef.data();
              //setUserStatus
              this.setUserStatus(this.currentUser);
              // @ts-ignore
              if (userRef.data().role !== 'admin') {
                this.router.navigate(['/user']);
              } else {
                this.router.navigate(['/admin']);
              }
            });
          });
      })
      .catch((err) => err);
  }

  logOut() {
    this.afAuth
      .signOut()
      .then(() => {
        console.log('user signed Out successfully');
        //set current user to null to be logged out
        this.currentUser = null;
        //set the listenener to be null, for the UI to react
        this.setUserStatus(null);
        this.ngZone.run(() => this.router.navigate(['/login']));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  userChanges() {
    this.afAuth
      .onAuthStateChanged((currentUser) => {
        if (currentUser) {
          this.firestore
            .collection('users')
            .ref.where('username', '==', currentUser.email)
            .onSnapshot((snap) => {
              snap.forEach((userRef) => {
                this.currentUser = userRef.data();
                //setUserStatus
                this.setUserStatus(this.currentUser);
                console.log(this.userStatus);

                // @ts-ignore
                if (userRef.data().role !== 'admin') {
                  this.ngZone.run(() => this.router.navigate(['/user']));
                } else {
                  this.ngZone.run(() => this.router.navigate(['/admin']));
                }
              });
            });
        } else {
          //this is the error you where looking at the video that I wasn't able to fix
          //the function is running on refresh so its checking if the user is logged in or not
          //hence the redirect to the login
          // this.ngZone.run(() => this.router.navigate(["/login"]));
        }
      })
      .then((r) => {});
  }
}
