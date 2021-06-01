import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firebase-firestore"


import firebaseConfig from '../config/firebaseConfig.js';

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth();

export const firebaseSignInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await firebase.auth().signInWithPopup(provider)
}

export const  firebaseSignInWithFacebook = async () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  await firebase.auth().signInWithPopup(provider)
}

export const firestore = app.firestore();


export default app
