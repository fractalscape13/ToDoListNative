import Firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCQnWPt8GH7XCnMh30uTy2ePw-qEiteiB4",
  authDomain: "todolistnative-7f36a.firebaseapp.com",
  databaseURL: "https://todolistnative-7f36a.firebaseio.com",
  projectId: "todolistnative-7f36a",
  storageBucket: "todolistnative-7f36a.appspot.com",
  messagingSenderId: "942063779716",
  appId: "1:942063779716:web:1d6fe9da554112756fe7d1"
};

let app = Firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.database();