import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAz4Ayg8mwqpf3zCrvK-937XyFBdYVXgsk",
    authDomain: "my-husband-birthday.firebaseapp.com",
    projectId: "my-husband-birthday",
    storageBucket: "my-husband-birthday.appspot.com",
    messagingSenderId: "435840225480",
    appId: "1:435840225480:web:7b4a3982abc8aba73595fd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};