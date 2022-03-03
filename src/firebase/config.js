import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBHO3XXoQvrd-rO7_FAm0HgPyuI4PgqTkg",
  authDomain: "finance-tracker-web.firebaseapp.com",
  projectId: "finance-tracker-web",
  storageBucket: "finance-tracker-web.appspot.com",
  messagingSenderId: "768657053276",
  appId: "1:768657053276:web:ee9d4d6dde866d8f5cf899"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }