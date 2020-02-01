import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export const fbConfig = {
  apiKey: "AIzaSyBv7nKixLmXf2IVhbP60xFxlOFACnN6cFU",
  authDomain: "jetcake-react.firebaseapp.com",
  databaseURL: "https://jetcake-react.firebaseio.com",
  projectId: "jetcake-react",
  storageBucket: "jetcake-react.appspot.com",
  messagingSenderId: "522385694241",
  appId: "1:522385694241:web:88d039747fc8b02b390d60"
};

firebase.initializeApp(fbConfig);

export default firebase;

export const storage = firebase.storage();