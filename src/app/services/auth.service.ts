import {Injectable} from '@angular/core';
import * as firebase from 'firebase';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {
    }

    signOutUser() {
        firebase.auth().signOut();
    }

    signInUser(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().signInWithEmailAndPassword(email, password).then(
                    () => {
                        resolve();
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    createNewUser(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().createUserWithEmailAndPassword(email, password).then(
                    () => {
                        resolve();
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }
}
