import firebase from "firebase";
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyD8fB3HNOoAEwOaq2CKC03jaCSbzRCNTSg",
    authDomain: "curd-auth.firebaseapp.com",
    databaseURL: "https://curd-auth-default-rtdb.firebaseio.com",
    projectId: "curd-auth",
    storageBucket: "curd-auth.appspot.com",
    messagingSenderId: "251321774109",
    appId: "1:251321774109:web:241ad3a24d631138b696f4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export { firebase }