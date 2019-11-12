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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
