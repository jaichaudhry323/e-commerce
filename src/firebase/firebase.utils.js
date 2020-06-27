import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCaVeIFnaIl_1m2XYy25r5j_uqXN1tv4MI",
    authDomain: "react-e-commerce-279f9.firebaseapp.com",
    databaseURL: "https://react-e-commerce-279f9.firebaseio.com",
    projectId: "react-e-commerce-279f9",
    storageBucket: "react-e-commerce-279f9.appspot.com",
    messagingSenderId: "570927534336",
    appId: "1:570927534336:web:f8270b9a6e274f8faa63e5",
    measurementId: "G-QENKRH95YH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = new firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

// exported auth , firebase, firestore 
// signInWithGooglePopup thing