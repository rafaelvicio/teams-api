import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAj3qfcZPv9Ca93vm8DHI0MC2p0xTCs3Zc",
  authDomain: "starttrek-620f0.firebaseapp.com",
  databaseURL: "https://starttrek-620f0.firebaseio.com",
  projectId: "starttrek-620f0",
  storageBucket: "starttrek-620f0.appspot.com",
  messagingSenderId: "2477702627"
};
const firebaseImpl = firebase.initializeApp(config);

export default firebaseImpl.auth();
