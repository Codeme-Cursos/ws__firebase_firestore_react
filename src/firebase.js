import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtrylaV-us69BUEXngOJ52kJwsFzkltgY",
  authDomain: "react-firebase-ddbfb.firebaseapp.com",
  projectId: "react-firebase-ddbfb",
  storageBucket: "react-firebase-ddbfb.appspot.com",
  messagingSenderId: "180201595904",
  appId: "1:180201595904:web:d70a5371fe50f35fa124e5",
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();