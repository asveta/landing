import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDLsIaBKcsJlglNJRfOlWkYpiyiSmIdPmE",
  authDomain: "asveta-org.firebaseapp.com",
  databaseURL:
    "https://asveta-org-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "asveta-org",
  storageBucket: "asveta-org.appspot.com",
  messagingSenderId: "552976804536",
  appId: "1:552976804536:web:36c1786920417d2880a24d",
  measurementId: "G-73N0QK63PB",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
