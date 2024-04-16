import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "incab-f4857.firebaseapp.com",
  projectId: "incab-f4857",
  storageBucket: "incab-f4857.appspot.com",
  messagingSenderId: "517705592774",
  appId: "1:517705592774:web:2ff09536e8eb8a61f94cc7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
