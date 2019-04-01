import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBEpbRrRLNrAd6PwHElKmh9gq55kDY5CGE",
  authDomain: "catch-of-the-day-nicole-s.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nicole-s.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;