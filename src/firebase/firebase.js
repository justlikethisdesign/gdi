// src/firebase/firebase.js

/**
 * https://css-tricks.com/intro-firebase-react/
 **/

import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDMakl74QEJ9q0vwobSzU4Go1tpZMQmcQg",
    authDomain: "great-date-ideas.firebaseapp.com",
    databaseURL: "https://great-date-ideas.firebaseio.com",
    projectId: "great-date-ideas",
    storageBucket: "great-date-ideas.appspot.com",
    messagingSenderId: "874010127130"
};

firebase.initializeApp(config);

//export const provider = new firebase.auth.GoogleAuthProvider();
//export const auth = firebase.auth();

export default firebase;