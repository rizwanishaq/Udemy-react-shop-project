import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCvQrFhzmQgxknDOGq4tQrEWejNIASER5Y",
  authDomain: "crwn-db-93947.firebaseapp.com",
  databaseURL: "https://crwn-db-93947.firebaseio.com",
  projectId: "crwn-db-93947",
  storageBucket: "crwn-db-93947.appspot.com",
  messagingSenderId: "408276131968",
  appId: "1:408276131968:web:d6f754ceea30fbb8be0665",
  measurementId: "G-W6VCGZ65ZL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
