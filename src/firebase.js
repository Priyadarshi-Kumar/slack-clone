import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDnwO8864VZ7hDBC7IxkJ9nEpoKWXBNJWU",
    authDomain: "slack-clone-d1b7e.firebaseapp.com",
    databaseURL: "https://slack-clone-d1b7e.firebaseio.com",
    projectId: "slack-clone-d1b7e",
    storageBucket: "slack-clone-d1b7e.appspot.com",
    messagingSenderId: "73475438000",
    appId: "1:73475438000:web:d08ad55b44359020ccd275",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
