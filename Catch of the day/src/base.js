import Rebase from "re-base"
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAlHjVq6Y6HGR5g-2uslyztTWlDvfSzhGQ",
  authDomain: "catch-of-the-day-davidportilla.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-davidportilla.firebaseio.com",
  // projectId: "catch-of-the-day-davidportilla",
  // storageBucket: "catch-of-the-day-davidportilla.appspot.com",
  // messagingSenderId: "347538178483",
  // appId: "1:347538178483:web:f204e392bfd199bfd88bc6",
  // measurementId: "G-86MCTTGN5Z"
})

const base = Rebase.createClass(firebaseApp.database())

// this is a named export
export { firebaseApp }

// this is a default export
export default base