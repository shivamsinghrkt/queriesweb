import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyCahpQq75Di41LY9Q1_ORgRtMx9zlSP7Ac",
  authDomain: "queries-7daea.firebaseapp.com",
  projectId: "queries-7daea",
  storageBucket: "queries-7daea.appspot.com",
  messagingSenderId: "69236752179",
  appId: "1:69236752179:web:b7aa2fe5da930171688846",
  measurementId: "G-5NQ4X206L2"
};

const firebaseapp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const db = firebaseapp.firestore()

export {auth,provider}

export default db
