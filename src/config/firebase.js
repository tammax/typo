import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyAMFUJIEpWG_L8sVX1-cq7-2t0ops2XmO0",
  authDomain: "typo-60d72.firebaseapp.com",
  databaseURL: "https://typo-60d72.firebaseio.com",
  projectId: "typo-60d72",
  storageBucket: "typo-60d72.appspot.com",
  messagingSenderId: "842989242327",
  appId: "1:842989242327:web:66f3e1a3dfbbcbbf"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
