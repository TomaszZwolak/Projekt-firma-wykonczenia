import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMKlnBinM4urubePFnZp6Nm09GrvWQaIY",
    authDomain: "firma-f7418.firebaseapp.com",
    projectId: "firma-f7418",
    storageBucket: "firma-f7418.appspot.com",
    messagingSenderId: "347864916732",
    appId: "1:347864916732:web:1d37919c4793d9879f2d79",
    measurementId: "G-PW8LD00632"
  };

  firebase.initializeApp(firebaseConfig);
 
  export const db = firebase.firestore();