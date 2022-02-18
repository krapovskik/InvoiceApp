import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgxVcOQGYqPgCDQ-HQdPQWyFsoEpMR4ds",
  authDomain: "invoice-c4bb8.firebaseapp.com",
  projectId: "invoice-c4bb8",
  storageBucket: "invoice-c4bb8.appspot.com",
  messagingSenderId: "1090105918256",
  appId: "1:1090105918256:web:f49085f011f6fec6debef5",
  measurementId: "G-G6WPXEK0K6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
