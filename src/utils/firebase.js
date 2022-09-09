import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDChtIe3BvlTet2R0iOer-hsHxuVmnBC_E",
    authDomain: "asveta-f8ec1.firebaseapp.com",
    databaseURL:
        "https://asveta-f8ec1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "asveta-f8ec1",
    storageBucket: "asveta-f8ec1.appspot.com",
    messagingSenderId: "637848415313",
    appId: "1:637848415313:web:bda850b18c57da63919c70",
    measurementId: "G-RBXE9SL5JN",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
