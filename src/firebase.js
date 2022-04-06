import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDuARFItIFNw46qGEbPrCjy1DNTFCBYmS4',
  authDomain: 'shopping-e8997.firebaseapp.com',
  projectId: 'shopping-e8997',
  storageBucket: 'shopping-e8997.appspot.com',
  messagingSenderId: '551612583317',
  appId: '1:551612583317:web:66be47e2f71d9151b0fa9c',
  measurementId: 'G-REW7BJXDCZ',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
