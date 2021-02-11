import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyCtkg1Hua8F2YHhPF8PwmTDp1uOHD5WOEc",
    authDomain: "book-santa-8131d.firebaseapp.com",
    databaseURL: "https://book-santa-8131d.firebaseio.com",
    projectId: "book-santa-8131d",
    storageBucket: "book-santa-8131d.appspot.com",
    messagingSenderId: "825247620797",
    appId: "1:825247620797:web:c9f0b639d0eceba7d3a1d4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
