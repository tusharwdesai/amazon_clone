import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3S_qXPk7as_9Zqn792oIV_Xz485S4izc",
  authDomain: "clone-72413.firebaseapp.com",
  databaseURL: "https://clone-72413.firebaseio.com",
  projectId: "clone-72413",
  storageBucket: "clone-72413.appspot.com",
  messagingSenderId: "750682108946",
  appId: "1:750682108946:web:005a007c9c0440c91dd4cb",
  measurementId: "G-TH9840DKK3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


export { db, auth };
