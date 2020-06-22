import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "order-form-6a274.firebaseapp.com",
  databaseURL: "https://order-form-6a274.firebaseio.com",
  projectId: "order-form-6a274",
  storageBucket: "order-form-6a274.appspot.com",
  messagingSenderId: "646598111957",
  appId: "1:646598111957:web:149729e9b713d4cb1da85c"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();