import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDjSZ6bFZTT_O4gKzOHiv_SrGgzFv8NM_A",
  authDomain: "crown-db-cf9c1.firebaseapp.com",
  databaseURL: "https://crown-db-cf9c1.firebaseio.com",
  projectId: "crown-db-cf9c1",
  storageBucket: "crown-db-cf9c1.appspot.com",
  messagingSenderId: "441346534324",
  appId: "1:441346534324:web:4ba8871e48cf4b9c86e0e1",
  measurementId: "G-SFYLYN1RZV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
