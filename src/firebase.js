import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCn47AJxglCiEhvlZXz6e491uEA9viNjBc",
  authDomain: "netflixclone-b0d72.firebaseapp.com",
  projectId: "netflixclone-b0d72",
  storageBucket: "netflixclone-b0d72.appspot.com",
  messagingSenderId: "552923629917",
  appId: "1:552923629917:web:96d91e4c3932f5ccb700b4",
  measurementId: "G-4P0SP0XKMD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;