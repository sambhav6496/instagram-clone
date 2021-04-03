import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpm6YDspMGo-i-ov2tibS92QHBZPrlOnU",
  authDomain: "instagram-clone-705e2.firebaseapp.com",
  databaseURL: "https://instagram-clone-705e2-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-705e2",
  storageBucket: "instagram-clone-705e2.appspot.com",
  messagingSenderId: "902334970991",
  appId: "1:902334970991:web:d02e6804a0847c16cc619a",
  measurementId: "G-THF0S9EK3H",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
