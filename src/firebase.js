import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD514Pc4m84hMoIqriAlWqLUKvsr11GBa4",
    authDomain: "cnotes-904e5.firebaseapp.com",
    databaseURL: "https://cnotes-904e5-default-rtdb.firebaseio.com",
    projectId: "cnotes-904e5",
    storageBucket: "cnotes-904e5.appspot.com",
    messagingSenderId: "92850692403",
    appId: "1:92850692403:web:55796c9bc4beec929a1e46",
    measurementId: "G-2DZD24MTKE"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth()
  export{db,auth}