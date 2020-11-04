import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDRgxqFYro1wM7bL8cUApfW2omxtBO0uVk",
    authDomain: "tryrrcapp.firebaseapp.com",
    databaseURL: "https://tryrrcapp.firebaseio.com",
    projectId: "tryrrcapp",
    storageBucket: "tryrrcapp.appspot.com",
    messagingSenderId: "725519771154",
    appId: "1:725519771154:web:d62bc8d268e86220581acb",
    measurementId: "G-ZY3RH204JY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;