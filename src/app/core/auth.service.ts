import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
uid = this.afAuth.authState.pipe(
  map(authState => {
    if (!authState) {
      return null;
    }
    return authState.uid;
  }),
);
  constructor(private readonly afAuth: AngularFireAuth) { }

  singUp(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  logIn(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logOut() {
    this.afAuth.auth.signOut();
  }
}
