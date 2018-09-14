import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    constructor() {
        const config = {
            // Initialize Firebase
            apiKey: 'AIzaSyCjUVNwzcnSy8IMTPY554mBgxC7_wFytpg',
            authDomain: 'bibliotheque-angular-35231.firebaseapp.com',
            databaseURL: 'https://bibliotheque-angular-35231.firebaseio.com',
            projectId: 'bibliotheque-angular-35231',
            storageBucket: 'bibliotheque-angular-35231.appspot.com',
            messagingSenderId: '239431094986'
        };
        firebase.initializeApp(config);
    }
}
