import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Post } from './models/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

	// tableau des posts
	
    title = 'Blog de Maxou';
    constructor(){	
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyDvEaq011huZ9z4yJbmZg4sNm8doRbA9Ac",
			authDomain: "blogdemaxou.firebaseapp.com",
			databaseURL: "https://blogdemaxou.firebaseio.com",
			projectId: "blogdemaxou",
			storageBucket: "blogdemaxou.appspot.com",
			messagingSenderId: "920089547579"
		};
		firebase.initializeApp(config);	
	}
}
